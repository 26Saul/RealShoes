import React, { useState, useEffect } from 'react';
import { ref, onValue, off, push, set } from 'firebase/database';
import { db } from '../../firebase';
import './Community.css';

function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("todas");

  // FORMULARIO STATES
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

  // 🔥 GUARDAR POST NUEVO
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
      
      // Limpiar formulario
      setTitle('');
      setContent('');
      setShowForm(false);
    } catch (error) {
      console.error('Error guardando:', error);
    }
  };

  const filteredPosts = posts.filter(post => 
    filter === "todas" || post.category === filter
  );

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>🔥 Conectando con Realtime Database...</p>
      </div>
    );
  }

  return (
    <div className="community">
      <header>
        <h1>👥 Comunidad RealShoes</h1>
        <p>{filteredPosts.length} posts en tiempo real</p>
        <button 
          className="new-post-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '❌ Cancelar' : '✏️ Nuevo Post'}
        </button>
      </header>

      {/* 🔥 FORMULARIO NUEVO POST */}
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
              <option value="novedades">🆕 Novedades</option>
              <option value="ayuda">❓ Ayuda</option>
              <option value="reviews">⭐ Reviews</option>
              <option value="ofertas">🔥 Ofertas</option>
            </select>
            <button type="submit">🚀 Publicar</button>
          </div>
        </form>
      )}

      {/* FILTROS */}
      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)} className="select">
          <option value="todas">Todas las categorías</option>
          <option value="novedades">🆕 Novedades</option>
          <option value="ayuda">❓ Ayuda</option>
          <option value="reviews">⭐ Reviews</option>
          <option value="ofertas">🔥 Ofertas</option>
        </select>
      </div>

      {/* POSTS */}
      <div className="grid">
        {filteredPosts.length === 0 ? (
          <div className="empty">
            <p>📭 No hay posts en esta categoría</p>
            <p>¡Sé el primero! <button onClick={() => setShowForm(true)}>Escribe ahora</button></p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="card">
              <img src={post.image || "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"} alt={post.title} />
              <div className="card-body">
                <span className={`tag ${post.category}`}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.content?.slice(0,80)}...</p>
                <div className="footer">
                  <span>👤 {post.author || 'Anónimo'}</span>
                  <span>❤️ {post.likes || 0}</span>
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
