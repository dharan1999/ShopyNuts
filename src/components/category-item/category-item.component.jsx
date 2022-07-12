import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, Title } = category;
    return (
    <div className="category-container">
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
    </div>
    <div className="category-body-container">
      <h2>
        {Title}
      </h2>
      <p>Show Now!</p>
    </div>
  </div>
);
};
export default CategoryItem;