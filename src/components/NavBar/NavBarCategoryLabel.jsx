const NavBarCategoryLabel = ({id, category}) =>
    <label className="nav-bar__category-label">
        <input type="radio" className="nav-bar__category-option" name="category" 
            id={`cat-${category}-${id}`} 
            defaultChecked={category === 'All'} />
        <span>{category}</span>
    </label>
;
export default NavBarCategoryLabel;