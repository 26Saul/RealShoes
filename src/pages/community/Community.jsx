import React, { useState, useEffect } from 'react';
import { ref, onValue, off, push, set } from 'firebase/database';
import { db } from '../../firebase';
import './Community.css';

function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('reviews');
  const [author, setAuthor] = useState('Anónimo');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const postsRef = ref(db, 'posts');
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setPosts(postsArray);
      } else {
        setPosts([]);
      }
      setLoading(false);
    });
    return () => off(postsRef, 'value', unsubscribe);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newPost = {
        title,
        content,
        category,
        author,
        likes: 0,
        createdAt: Date.now()
      };

      const postsRef = ref(db, 'posts');
      await set(push(postsRef), newPost);
      
      setTitle('');
      setContent('');
      setShowForm(false);
    } catch (error) {
      console.error('Error guardando:', error);
    }
  };

  const filteredPosts = posts.filter(post => 
    filter === "all" || post.category === filter
  );

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Espere un segundo...</p>
      </div>
    );
  }

  return (
    <div className="community">
      <header>
        <h1>Reseñas de nuestra comunidad.</h1>
        <p>{filteredPosts.length} Reseñas recientes</p>
        <button 
          className="new-post-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '❌ Cancelar' : 'Nueva Reseña'}
        </button>
      </header>

      {showForm && (
        <form onSubmit={handleSubmit} className="new-post-form">
          <input
            placeholder="Título del post..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
          />
          <textarea
            placeholder="Escribe tu post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="3"
          />
          <div className="form-row">
            <input
              placeholder="Tu nombre"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="updates"> Novedades</option>
              <option value="help"> Ayuda</option>
              <option value="reviews"> Reviews</option>
              <option value="ofert"> Ofertas</option>
            </select>
            <button type="submit"> Publicar</button>
          </div>
        </form>
      )}

      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)} className="select">
          <option value="all">Todas las categorías</option>
          <option value="updates">Novedades</option>
          <option value="help">Ayuda</option>
          <option value="reviews">Reviews</option>
          <option value="ofert">Ofertas</option>
        </select>
      </div>

      <div className="grid">
        {filteredPosts.length === 0 ? (
          <div className="empty">
            <p> No hay reseñas en esta categoría</p>
            <p>¡Sé nuestra primera reseña! <button onClick={() => setShowForm(true)}>Escribe ahora</button></p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="card">
              <div className="card-body">
                <span className={`tag ${post.category}`}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.content?.slice(0,80)}...</p>
                <div className="footer">
                  <span>{post.author || 'Anónimo'}</span>
                  <span>{post.likes || 0}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Community;
