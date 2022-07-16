import React from "react";
import Illus from "../assets/fonts/fontawesome/file-image-solid-blanc.svg";
import Film from "../assets/fonts/fontawesome/photo-film-solid-blanc.svg";
import Musi from "../assets/fonts/fontawesome/music-solid-blanc.svg";
import Abou from "../assets/fonts/fontawesome/about-solid-blanc.svg";
import Mentio from "../assets/fonts/fontawesome/note-sticky-solid-blanc.svg";

export default ({ close }) => (
  <div className="menu">
    <div className="ImgBg">
      <a onClick={close}>
        <img className='IllusImg' src={Illus} alt="Illustations" title="Illlustrations" id="IllusImg" />
    </a>
    <a onClick={close}>
        <img className='MusiImg' src={Musi} alt="Jams" title="Jams" id="MusiImg" />
    </a>
    <a onClick={close}>
        <img className='FilmImg' src={Film} alt="Vidéos" title="Vidéos" id="FilmImg" />
    </a>
    <a onClick={close}>
        <img className='AbouImg' src={Abou} alt="À propos" title="À propos" id="AbouImg" />
        </a>
      <a onClick={close}>
        <img className='MentioImg' src={Mentio} alt="Mentions légales" title="Mentions légales" id="MentioImg" />
    </a>
    </div>
    </div>
);
