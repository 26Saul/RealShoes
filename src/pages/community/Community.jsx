import React, { useState, useEffect } from 'react';
import { ref, onValue, off, push, set, update, remove } from 'firebase/database';
import { db } from '../../firebase';
import './Community.css';

function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState('all');

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('reviews');
  const [author, setAuthor] = useState('Anónimo');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const postsRef = ref(db, 'posts');

    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const postsArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        setPosts(postsArray);
      } else {
        setPosts([]);
      }

      setLoading(false);
    });

    return () => off(postsRef, 'value', unsubscribe);
  }, []);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('reviews');
    setAuthor('Anónimo');
    setEditingId(null);
  };

  const handleToggleForm = () => {

    if (!showForm) {
      resetForm();
    }
    setShowForm((prev) => !prev);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      if (editingId) {

        const postRef = ref(db, `posts/${editingId}`);
        await update(postRef, {
          title,
          content,
          category,
          author,
        });
      } else {

        const newPost = {
          title,
          content,
          category,
          author,
          likes: 0,
          createdAt: Date.now(),
        };
        const postsRef = ref(db, 'posts');
        await set(push(postsRef), newPost);
      }

      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error('Error guardando:', error);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title || '');
    setContent(post.content || '');
    setCategory(post.category || 'reviews');
    setAuthor(post.author || 'Anónimo');
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      const postRef = ref(db, `posts/${id}`);
      await remove(postRef);
    } catch (error) {
      console.error('Error borrando:', error);
    }
  };

  const filteredPosts = posts.filter(
    (post) => filter === 'all' || post.category === filter
  );

  const getTagClass = (cat) => {
    switch (cat) {
      case 'updates':
        return 'tag updates';
      case 'help':
        return 'tag help';
      case 'ofert':
        return 'tag ofert';
      case 'reviews':
      default:
        return 'tag reviews';
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'updates':
        return 'Actualizaciones';
      case 'help':
        return 'Ayuda';
      case 'ofert':
        return 'Ofertas';
      case 'reviews':
      default:
        return 'Reseñas';
    }
  };

  if (loading) {
    return (
      <div className="community">
        <div className="loading">
          <div className="spinner" />
          <p>Espere un segundo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="community">
      <header>
        <h1>Comunidad RealShoes</h1>
        <p>
          Comparte reseñas, dudas y novedades con el resto de la comunidad.
        </p>
        <button className="new-post-btn" onClick={handleToggleForm}>
          {showForm
            ? 'Cerrar formulario'
            : editingId
            ? 'Editar publicación'
            : 'Escribir nueva reseña'}
        </button>
      </header>

      {showForm && (
        <form className="new-post-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título de tu publicación"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Cuéntanos tu experiencia, duda u opinión..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="form-row">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="reviews">Reseñas</option>
              <option value="updates">Actualizaciones</option>
              <option value="help">Ayuda</option>
              <option value="ofert">Ofertas</option>
            </select>

            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <button type="submit">
              {editingId ? 'Guardar cambios' : 'Publicar'}
            </button>
          </div>
        </form>
      )}

      <div className="filters">
        <select
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todas las categorías</option>
          <option value="reviews">Reseñas</option>
          <option value="updates">Actualizaciones</option>
          <option value="help">Ayuda</option>
          <option value="ofert">Ofertas</option>
        </select>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="empty">
          <p>No hay reseñas en esta categoría</p>
          <p>¡Sé nuestra primera reseña!</p>
        </div>
      ) : (
        <div className="grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card">
              <div className="card-body">
                <span className={getTagClass(post.category)}>
                  {getCategoryLabel(post.category)}
                </span>

                <h3>{post.title}</h3>

                <p>
                  {post.content && post.content.length > 160
                    ? `${post.content.slice(0, 160)}...`
                    : post.content}
                </p>

                <div className="footer">
                  <span>
                    {post.author || 'Anónimo'}
                    {post.createdAt &&
                      ` · ${new Date(
                        post.createdAt
                      ).toLocaleDateString()}`}
                  </span>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button type="button" onClick={() => handleEdit(post)}>
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn-danger"
                      onClick={() => handleDelete(post.id)}
                    >
                      Borrar
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Community;
