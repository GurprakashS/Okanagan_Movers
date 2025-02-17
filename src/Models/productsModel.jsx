import PropTypes from "prop-types";

const ProductModal = ({
  show,
  onClose,
  onSubmit,
  product,
  onInputChange,
  onFileChange,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Product</h5>
            <button type="button" className="close" onClick={onClose}>
              ×
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={onInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={onInputChange}
                  className="form-control"
                  step="0.01"
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={onFileChange}
                  className="form-control"
                />
                {product.imageName && <p>{product.imageName}</p>}
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageName: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
};

export default ProductModal;
