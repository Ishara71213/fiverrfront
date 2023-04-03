import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="addGig">
      <div className="container">
        <div className="title">
          <h1>Create Gig</h1>
        </div>
        <form action="" className="createGig">
          <div className="left">
            <label htmlFor="title">
              Title
              <input
                className="textInput pdb"
                type="text"
                name="title"
                placeholder="e.g: I will do something I am really good at"
              />
            </label>
            <label htmlFor="categories">
              Categories
              <select className="textInput" name="categories" id="categories">
                <option value="design">Design</option>
                <option value="animation">Animation</option>
                <option value="3dDesign">3d design</option>
              </select>
            </label>
            <label htmlFor="coverImage">
              Cover Image
              <input className="pdb" name="coverImage" type="file" />
            </label>
            <label htmlFor="images">
              Upload Images
              <input className="pdb" name="images" type="file" multiple />
            </label>
            <label htmlFor="description">
              Description
              <textarea
                className="pdb"
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </label>
            <button className="createBtn" type="submit">
              Create Gig
            </button>
          </div>
          <div className="right">
            <label htmlFor="ServiceTitle">
              Service Title
              <input
                className="textInput"
                type="text"
                name="ServiceTitle"
                placeholder="e.g: one logo design"
              />
            </label>
            <label htmlFor="shortDesc">
              Short Description
              <textarea
                className="pdb text"
                name="shortDesc"
                id="shortDesc"
                cols="10"
                rows="10"
              ></textarea>
            </label>
            <div className="inputCont">
              <label htmlFor="deliveryTime">
                Delivery Time
                <input
                  className="textInput pdb"
                  type="number"
                  name="deliveryTime"
                  placeholder="e.g: 3"
                  min={1}
                />
              </label>
              <label htmlFor="revisions">
                Revision Number
                <input
                  className="textInput pdb"
                  type="number"
                  name="revisions"
                  placeholder="e.g: 3"
                  min={1}
                />
              </label>
              <label htmlFor="price">
                Price
                <input
                  className="textInput pdb"
                  type="number"
                  name="price"
                  placeholder="e.g: 3"
                  min={1}
                />
              </label>
            </div>
            <label htmlFor="features">
              Add features
              <div className="features">
                <input
                  className="textInput pdb"
                  type="text"
                  name="features"
                  placeholder="e.g: Source file"
                />
                <input
                  className="textInput pdb"
                  type="text"
                  name="features"
                  placeholder="e.g: 3 different sizes"
                />
                <input
                  className="textInput pdb"
                  type="text"
                  name="features"
                  placeholder="e.g: 2 variations"
                />
                <input
                  className="textInput pdb"
                  type="text"
                  name="features"
                  placeholder="e.g: fast delivery"
                />
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
