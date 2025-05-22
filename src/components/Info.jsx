export default function Info({ img, title, paragraphs }) {
  return (
    <section className="description-container">
      <div className="media">
        <img src={img} alt="folklore" />
      </div>

      <div className="description">
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
