import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<div>
<nav className="nav">
  <a className="nav-link disabled" >Clicky Game </a>
  <a className="nav-link disabled" >Click an image to begin! </a>
  <a className="nav-link disabled" >Score: 0 | Top Score: 0</a>
</nav>
<div className="container-fluid">
<h1>Clicky Game!</h1>

<h2>Click on an image to earn points, but don't click on any more than once!</h2>
</div>
<main class="container">
 <img alt="" src={"https://cdn.pastemagazine.com/www/blogs/lists/2010/05/13/homer_simpson_300.jpg"} />
<img alt="" src={'https://img00.deviantart.net/282b/i/2007/002/4/3/spongebob_has_hair__by_deviantretard.jpg'} />
<img alt="" src={'http://cdn.smosh.com/sites/default/files/2014/11/cartoon-heads-stewie.jpg'} />
<img alt="" src={'https://www.whudat.de/images/Big_Heads_Illustrated_Characters_From_Famous_Movies-_and_TV_Series_2014_05.jpg'} />
<img alt="" src={'http://www.landaasmenighet.no/Portals/132/3602836742_6f8c876e28[1].jpg'} />
<img alt="" src={'https://i.pinimg.com/originals/70/aa/c0/70aac08890249dfa09f4f3cd3de182f2.png'} />
<img alt="" src={'https://vignette.wikia.nocookie.net/star-and-the-forces-of-evil/images/7/7f/Pony_Head_-_Goblin_Dogs_profile.png/revision/latest?cb=20170225163148'} />
<img alt="" src={'https://lumiere-a.akamaihd.net/v1/images/9428da2563387bf08c4b2ba32af5db03169fa0d5.jpeg'} />
<img alt="" src={'https://i.pinimg.com/originals/d3/d9/0b/d3d90bc572972bec3d0f6f58e4f8795a.jpg'} />
<img alt="" src={'https://g7d8r29h4o12bn43l2xflqq5-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/vectoredit_sectionheads_characters2.png'} />
</main>
<footer className="footer">
"ClickyGame!"
<img alt= "react" style={{width:'40px', height:"30px", }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
  </footer>
</div>


   )
  }
 }

export default App;
