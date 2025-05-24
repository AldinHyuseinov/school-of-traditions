export default function Article(props) {
  return (
    <article className="news-item">
      <p className="news-title">{props.articleTitle}</p>
      <p>{props.article}</p>
    </article>
  );
}
