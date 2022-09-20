import React, { useState, useEffect } from "react";
import Header from "./PublisherHeader";
import { useHistory } from "react-router-dom";
import fireBaseApp from "../config/configdb";
import "../css/Header.css";
import eventBus from "./EventBus";
import firebase from "firebase";
import Footer from "./PublisherFooter";

const Dashboard = () => {
  const hist = useHistory();
  const [book, setBook] = useState([]);
  const [photourl, setPhotourl] = useState([]);
  const [mag, setMag] = useState([]);
  const [magphotourl, setMagphotourl] = useState([]);

  const [search, setSearch] = useState("");
  const photos = fireBaseApp.storage().ref();
  const currentUser = firebase.auth().currentUser;
  const db = fireBaseApp.firestore();
  const fetchBooks = async () => {
    const response = db.collection("books");
    const data = await response.get().then((querySnapshot) => {
      querySnapshot.forEach((data) => {
        setBook((b) => [...b, data.data()]);
      });
    });
    // data.docs.forEach(item => {
    //     setBook([...book,item.data()])
    // })
  };
  const fetchMagazines = async () => {
    const response = db.collection("magazines");
    const data = await response.get().then((querySnapshot) => {
      querySnapshot.forEach((data) => {
        setMag((b) => [...b, data.data()]);
      });
    });
  };

  const fetchImage = () => {
    try {
      const data = photos
        .child(`books/covers/`)
        .listAll()
        .then((url) => {
          url.items.forEach((igurl) => {
            igurl
              .getDownloadURL()
              .then((imgURL) => setPhotourl((b) => [...b, imgURL]));
          });
        });
      return data;
    } catch (error) {
      (error);
    }
  };
  let imgData = async () => {
    let result = await photos.child(`books/covers/`).listAll();
    let urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());

    return Promise.all(urlPromises);
  };
  const loadImages = async () => {
    const urls = await imgData();
    setPhotourl(urls);
    photourl.forEach((R) => (R));
  };
  let imgMagData = async () => {
    let result = await photos.child(`magazines/covers/`).listAll();
    let urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());

    return Promise.all(urlPromises);
  };
  const loadMagImages = async () => {
    const urls = await imgMagData();
    setMagphotourl(urls);
  };
  const handleDelete = async (b, s) => {
    photos.child(`${s}/covers/${b.photo_url}`).delete();
    photos
      .child(`${s}/ebooks/${s.includes("books") ? b.book_url : b.mag_url}`)
      .delete();
    const response = db.collection(s).doc(b.bookid).delete();

    // db.collection("books").get().filter(B => B.title === b.title).limit(1).delete();
  };
  const handleEdit = (books) => {
    eventBus.dispatch("dataSent", { message: books });
    localStorage.setItem("data", JSON.stringify(books));
    ;
  };
  const booksDisplay = () => {
    return (
      <div className="booksmedia-fullwidth">
        <h3 align="center" className="entry-content font-extrabold heading">
          Books
        </h3>

        <ul className="row Books" id="Books">
          {book
            .filter((books) =>
              books.publisher.includes(currentUser.displayName)
            )
            .filter((books) =>
              search === "" ? books : books.title.toLowerCase().includes(search)
            )
            .map((books, index) => {
              const photoURL = photourl.filter((e) =>
                e.includes(books.photo_url)
              );
              ;
              return (
                <li key={index}>
                  <div className="book-list-icon yellow-icon"></div>

                  <figure>
                    <img src={photoURL} alt="Book" className="w-72" />
                    <figcaption className="h-auto">
                      <header>
                        <h3>{books.title} </h3>
                        <p overflow="hidden">
                          <strong>{books.authors + " "}</strong>
                        </p>
                      </header>
                      <p>{books.synopsis.substring(0, 200)}</p>
                      <div className="actions">
                        <ul
                          id="actions0"
                          className="flex justify-content-around my-0"
                        >
                          <li>
                            <img
                              src={"/Assets/delico.png"}
                              width="16px"
                              height="16px"
                              margin="0"
                            />
                            <a
                              href="#"
                              target="_blank"
                              data-toggle="blog-tags"
                              onClick={() => handleDelete(books, "books")}
                            >
                              Delete
                            </a>
                          </li>
                          <li>
                            <img
                              src={"/Assets/edico.png"}
                              width="16px"
                              height="16px"
                            />

                            <a
                              href="/editbook"
                              onClick={() => handleEdit(books)}
                            >
                              EDIT
                            </a>
                          </li>
                        </ul>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };
  const magazineDisplay = () => {
    return (
      <div className="booksmedia-fullwidth">
        <h3 align="center" className="entry-content font-extrabold heading">
          Magazines
        </h3>

        <ul className="Magazines row" id="Magazines">
          {mag
            .filter((books) =>
              books.publisher.includes(currentUser.displayName)
            )
            .filter((books) =>
              search === "" ? books : books.title.toLowerCase().includes(search)
            )
            .map((books, index) => {
              const photoURL = magphotourl.filter((e) =>
                e.includes(books.photo_url)
              );
              ;
              return (
                <li key={index}>
                  <div className="book-list-icon red-icon"></div>

                  <figure>
                    <img
                      src={photoURL}
                      alt="Book"
                      width="350vh"
                      height="400vh"
                    />
                    <figcaption className="h-auto">
                      <header>
                        <h3>{books.title} </h3>
                        <p overflow="hidden">
                          <strong>
                            {"Published Date: " + books.issue_date}
                          </strong>
                        </p>
                      </header>
                      <p>{books.description.substring(0, 200)}</p>
                      <div className="actions">
                        <ul id="actions0">
                          <li>
                            <img
                              src={"/Assets/delico.png"}
                              width="16px"
                              height="16px"
                              margin="0"
                            />
                            <a
                              href="#"
                              target="_blank"
                              data-toggle="blog-tags"
                              onClick={() => handleDelete(books, "magazines")}
                            >
                              Delete
                            </a>
                          </li>
                          <li>
                            <img
                              src={"/Assets/edico.png"}
                              width="16px"
                              height="16px"
                            />

                            <a
                              href="/editmagazine"
                              onClick={() => handleEdit(books)}
                            >
                              EDIT
                            </a>
                          </li>
                        </ul>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    fetchBooks();
    loadImages();
    fetchMagazines();
    loadMagImages();
  }, []);
  return (
    <div>
      {}
      <Header />
      <div id="content" className="pb-14 site-content">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <div className="books-full-width">
              <div className="mx-auto px-10">
                <section className="search-filters">
                  <div className="filter-box">
                    <h3 color="#111B2B" display="block" width="50%">
                      Welcome to your library
                    </h3>
                    <div className="col-md-4 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Search by Keyword"
                          id="keywords"
                          name="keywords"
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="submit"
                          value="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </section>
                {booksDisplay()}
                {magazineDisplay()}
                {/* <nav className="navigation pagination text-center">
                                <h2 className="screen-reader-text">Posts navigation</h2>
                                <div className="nav-links">
                                    <a className="prev page-numbers" href="#."><img src = {"/Assets/left_Arrow.png"} width = "24px" height = "24px"/> Previous</a>
                                    <a className="page-numbers" href="#.">1</a>
                                    <span className="page-numbers current">2</span>
                                    <a className="page-numbers" href="#.">3</a>
                                    <a className="page-numbers" href="#.">4</a>
                                    <a className="next page-numbers" href="#.">Next  <img src = {"/Assets/right_Arrow.png"} width = "24px" height = "24px"/></a>
                                </div>
                            </nav> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
