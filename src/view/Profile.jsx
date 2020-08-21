import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

const Profile = () => {

  return (
    <>
      <NavBar />
      <section className="mt-5 pt-3">
        {/* <div class="user-information"> </div> */}
        <p>Publicaciones</p>
        {/* <section> */}
        <CreatePost />
        <PostCard />
        {/* </section> */}
        {/* <section id="allPost" class="post-done">
          </section> */}
      </section>
    </>
  )
}

export default Profile;