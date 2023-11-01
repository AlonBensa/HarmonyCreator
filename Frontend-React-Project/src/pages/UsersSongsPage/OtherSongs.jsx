import React, { useState, useEffect } from "react";
import "./Songs.css";
import OtherSong from "../../components/SongComp/OtherSong";
import Navbar from "../../components/NavbarComp/Navbar";
import SearchBar from "../../components/SearchBarComp/SearchBar";
import GenresFilter from "../../components/GenresFilterComp/GenresFilter";
import User from "../../components/UserComp/User";

function OtherSongs() {
  const userSongs = [
    [
      "User 1",
      "GanGnam",
      "Punk",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at blandit libero. Fusce dictum venenatis nibh, quis dignissim tortor sollicitudin a. Pellentesque luctus ac diam vitae imperdiet. Fusce ultrices augue ultricies pulvinar efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tellus tortor, ullamcorper eget purus et, imperdiet volutpat diam. Duis tincidunt rhoncus sem id vulputate. Morbi mollis mauris sed purus vehicula, et aliquet nisi placerat. Nam massa sem, fringilla nec risus varius, sodales vestibulum nisi. Donec ultrices ex non nisl pretium, vitae iaculis augue varius. Nunc rhoncus rutrum posuere. Suspendisse sit amet neque euismod, dapibus felis vel, ultrices urna. Aliquam erat volutpat. Fusce ut velit sed justo ultrices porttitor.",
      55,
      [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mi non neque convallis malesuada. Phasellus malesuada lectus eget vehicula laoreet. Pellentesque auctor, mi at efficitur aliquet, ipsum elit sollicitudin risus, vel dapibus neque felis sit amet lorem. Mauris quis purus tellus. Aliquam erat volutpat. Ut sit amet venenatis dui, nec blandit erat. Nullam interdum eget lacus in congue.",
        "Donec efficitur mauris nec metus facilisis semper. Mauris vel sapien non urna euismod tempor. In tempus, libero ac commodo euismod, mauris dolor varius dui, nec fringilla nisl metus ac erat. Pellentesque id enim fermentum, tempor ante nec, interdum arcu. Proin luctus justo a quam mollis imperdiet. Curabitur metus massa, eleifend in iaculis eget, ultricies fringilla ex. Aenean ornare tincidunt ex id pretium. Nulla ut dolor ut magna aliquam accumsan. Maecenas commodo neque vel congue volutpat. In placerat, metus non viverra vestibulum, eros nunc porta enim, eget euismod massa augue eget massa. Sed vitae elementum magna. Quisque luctus arcu vitae maximus aliquet. Vivamus ullamcorper sollicitudin dui, in euismod metus fringilla id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel dapibus neque. Suspendisse sed scelerisque erat, quis tristique risus.",
        "Aliquam id feugiat elit, ut rutrum magna. Vestibulum ac elit eget enim volutpat aliquam. Aenean sit amet tortor sem. Phasellus eu convallis nulla, lobortis venenatis massa. Duis accumsan est ac porttitor luctus. Donec tempor placerat est id pulvinar. Nulla facilisi. Sed eu mauris id est eleifend interdum. Proin vehicula libero lorem, a semper augue molestie rutrum. Pellentesque mollis velit ut nibh sodales maximus. Mauris varius cursus lacus ut laoreet. Fusce sollicitudin nisl eget ante vulputate, vitae sodales metus ultricies. Cras vitae mauris ipsum. Aliquam bibendum pharetra laoreet. Sed molestie ligula et ligula faucibus, sed hendrerit nisl mollis.",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id aliquet justo, et facilisis justo. Etiam in malesuada augue. Suspendisse potenti. Nunc euismod efficitur erat et consectetur. Sed non tempor tellus. Sed malesuada et augue non facilisis. Donec tempor fermentum lacus, quis dignissim mi sollicitudin id. Aenean at mollis ipsum. Maecenas ut urna ac odio eleifend facilisis. Suspendisse porta, turpis sit amet dignissim malesuada, eros leo condimentum mi, in volutpat ante erat a lacus. Fusce aliquam erat mi, non consectetur ante rutrum ut.",
        "Quisque vulputate ullamcorper sapien, sed faucibus eros consectetur id. Donec accumsan malesuada magna, tempus porta elit rutrum ac. Phasellus consectetur sed quam ut venenatis. Nulla eu euismod quam, ut pharetra orci. In non dolor pretium, tincidunt est vitae, malesuada risus. Maecenas semper rhoncus faucibus. Praesent ut lorem eget velit fringilla viverra. Nulla vehicula iaculis libero vitae placerat. Vivamus tincidunt, velit in sagittis euismod, eros dui tincidunt libero, quis dictum lectus ante quis lorem. Curabitur egestas eleifend est quis ultrices. In quis velit euismod, rutrum neque in, eleifend quam. Nam quis odio quis risus congue lobortis et eu augue.",
        "Nunc commodo accumsan ex. Vivamus scelerisque imperdiet velit ac venenatis. Vivamus auctor purus at mollis finibus. Mauris id facilisis ex, at bibendum dui. Nulla vitae sem fermentum, sagittis diam et, interdum urna. Nullam ac nisl id purus efficitur pretium. Fusce vel magna libero. Donec suscipit posuere neque id pharetra. Pellentesque iaculis augue vitae enim cursus mattis. Curabitur laoreet ex at nibh porttitor accumsan. Donec dolor lorem, vehicula ut vestibulum ut, pulvinar at nibh. Etiam vel tincidunt diam, nec mattis ipsum. Nunc vel ex neque. Nam dictum tincidunt libero, sed sagittis ante sagittis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec odio tempus, pulvinar diam vel, condimentum nisl.",
        "Sed egestas volutpat ante, vel consequat est tempor id. Nullam condimentum aliquam tempus. Nam vel massa ac nulla mattis pellentesque vitae sit amet neque. Aenean ut euismod metus, ut sagittis magna. Nam ultrices dictum libero at ultricies. Sed quis purus ornare, tincidunt quam ac, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae mauris quam. Etiam ornare sem in tempor venenatis. In hac habitasse platea dictumst. Praesent eget aliquam elit.",
      ],
    ],
    [
      "User 2",
      "Asai",
      "Soul",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at blandit libero. Fusce dictum venenatis nibh, quis dignissim tortor sollicitudin a. Pellentesque luctus ac diam vitae imperdiet. Fusce ultrices augue ultricies pulvinar efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tellus tortor, ullamcorper eget purus et, imperdiet volutpat diam. Duis tincidunt rhoncus sem id vulputate. Morbi mollis mauris sed purus vehicula, et aliquet nisi placerat. Nam massa sem, fringilla nec risus varius, sodales vestibulum nisi. Donec ultrices ex non nisl pretium, vitae iaculis augue varius. Nunc rhoncus rutrum posuere. Suspendisse sit amet neque euismod, dapibus felis vel, ultrices urna. Aliquam erat volutpat. Fusce ut velit sed justo ultrices porttitor.",
      94,
      [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mi non neque convallis malesuada. Phasellus malesuada lectus eget vehicula laoreet. Pellentesque auctor, mi at efficitur aliquet, ipsum elit sollicitudin risus, vel dapibus neque felis sit amet lorem. Mauris quis purus tellus. Aliquam erat volutpat. Ut sit amet venenatis dui, nec blandit erat. Nullam interdum eget lacus in congue.",
        "Donec efficitur mauris nec metus facilisis semper. Mauris vel sapien non urna euismod tempor. In tempus, libero ac commodo euismod, mauris dolor varius dui, nec fringilla nisl metus ac erat. Pellentesque id enim fermentum, tempor ante nec, interdum arcu. Proin luctus justo a quam mollis imperdiet. Curabitur metus massa, eleifend in iaculis eget, ultricies fringilla ex. Aenean ornare tincidunt ex id pretium. Nulla ut dolor ut magna aliquam accumsan. Maecenas commodo neque vel congue volutpat. In placerat, metus non viverra vestibulum, eros nunc porta enim, eget euismod massa augue eget massa. Sed vitae elementum magna. Quisque luctus arcu vitae maximus aliquet. Vivamus ullamcorper sollicitudin dui, in euismod metus fringilla id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel dapibus neque. Suspendisse sed scelerisque erat, quis tristique risus.",
        "Aliquam id feugiat elit, ut rutrum magna. Vestibulum ac elit eget enim volutpat aliquam. Aenean sit amet tortor sem. Phasellus eu convallis nulla, lobortis venenatis massa. Duis accumsan est ac porttitor luctus. Donec tempor placerat est id pulvinar. Nulla facilisi. Sed eu mauris id est eleifend interdum. Proin vehicula libero lorem, a semper augue molestie rutrum. Pellentesque mollis velit ut nibh sodales maximus. Mauris varius cursus lacus ut laoreet. Fusce sollicitudin nisl eget ante vulputate, vitae sodales metus ultricies. Cras vitae mauris ipsum. Aliquam bibendum pharetra laoreet. Sed molestie ligula et ligula faucibus, sed hendrerit nisl mollis.",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id aliquet justo, et facilisis justo. Etiam in malesuada augue. Suspendisse potenti. Nunc euismod efficitur erat et consectetur. Sed non tempor tellus. Sed malesuada et augue non facilisis. Donec tempor fermentum lacus, quis dignissim mi sollicitudin id. Aenean at mollis ipsum. Maecenas ut urna ac odio eleifend facilisis. Suspendisse porta, turpis sit amet dignissim malesuada, eros leo condimentum mi, in volutpat ante erat a lacus. Fusce aliquam erat mi, non consectetur ante rutrum ut.",
        "Quisque vulputate ullamcorper sapien, sed faucibus eros consectetur id. Donec accumsan malesuada magna, tempus porta elit rutrum ac. Phasellus consectetur sed quam ut venenatis. Nulla eu euismod quam, ut pharetra orci. In non dolor pretium, tincidunt est vitae, malesuada risus. Maecenas semper rhoncus faucibus. Praesent ut lorem eget velit fringilla viverra. Nulla vehicula iaculis libero vitae placerat. Vivamus tincidunt, velit in sagittis euismod, eros dui tincidunt libero, quis dictum lectus ante quis lorem. Curabitur egestas eleifend est quis ultrices. In quis velit euismod, rutrum neque in, eleifend quam. Nam quis odio quis risus congue lobortis et eu augue.",
        "Nunc commodo accumsan ex. Vivamus scelerisque imperdiet velit ac venenatis. Vivamus auctor purus at mollis finibus. Mauris id facilisis ex, at bibendum dui. Nulla vitae sem fermentum, sagittis diam et, interdum urna. Nullam ac nisl id purus efficitur pretium. Fusce vel magna libero. Donec suscipit posuere neque id pharetra. Pellentesque iaculis augue vitae enim cursus mattis. Curabitur laoreet ex at nibh porttitor accumsan. Donec dolor lorem, vehicula ut vestibulum ut, pulvinar at nibh. Etiam vel tincidunt diam, nec mattis ipsum. Nunc vel ex neque. Nam dictum tincidunt libero, sed sagittis ante sagittis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec odio tempus, pulvinar diam vel, condimentum nisl.",
        "Sed egestas volutpat ante, vel consequat est tempor id. Nullam condimentum aliquam tempus. Nam vel massa ac nulla mattis pellentesque vitae sit amet neque. Aenean ut euismod metus, ut sagittis magna. Nam ultrices dictum libero at ultricies. Sed quis purus ornare, tincidunt quam ac, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae mauris quam. Etiam ornare sem in tempor venenatis. In hac habitasse platea dictumst. Praesent eget aliquam elit.",
      ],
    ],
    [
      "User 3",
      "BirdSong",
      "Funk",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at blandit libero. Fusce dictum venenatis nibh, quis dignissim tortor sollicitudin a. Pellentesque luctus ac diam vitae imperdiet. Fusce ultrices augue ultricies pulvinar efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tellus tortor, ullamcorper eget purus et, imperdiet volutpat diam. Duis tincidunt rhoncus sem id vulputate. Morbi mollis mauris sed purus vehicula, et aliquet nisi placerat. Nam massa sem, fringilla nec risus varius, sodales vestibulum nisi. Donec ultrices ex non nisl pretium, vitae iaculis augue varius. Nunc rhoncus rutrum posuere. Suspendisse sit amet neque euismod, dapibus felis vel, ultrices urna. Aliquam erat volutpat. Fusce ut velit sed justo ultrices porttitor.",
      67,
      [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mi non neque convallis malesuada. Phasellus malesuada lectus eget vehicula laoreet. Pellentesque auctor, mi at efficitur aliquet, ipsum elit sollicitudin risus, vel dapibus neque felis sit amet lorem. Mauris quis purus tellus. Aliquam erat volutpat. Ut sit amet venenatis dui, nec blandit erat. Nullam interdum eget lacus in congue.",
        "Donec efficitur mauris nec metus facilisis semper. Mauris vel sapien non urna euismod tempor. In tempus, libero ac commodo euismod, mauris dolor varius dui, nec fringilla nisl metus ac erat. Pellentesque id enim fermentum, tempor ante nec, interdum arcu. Proin luctus justo a quam mollis imperdiet. Curabitur metus massa, eleifend in iaculis eget, ultricies fringilla ex. Aenean ornare tincidunt ex id pretium. Nulla ut dolor ut magna aliquam accumsan. Maecenas commodo neque vel congue volutpat. In placerat, metus non viverra vestibulum, eros nunc porta enim, eget euismod massa augue eget massa. Sed vitae elementum magna. Quisque luctus arcu vitae maximus aliquet. Vivamus ullamcorper sollicitudin dui, in euismod metus fringilla id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel dapibus neque. Suspendisse sed scelerisque erat, quis tristique risus.",
        "Aliquam id feugiat elit, ut rutrum magna. Vestibulum ac elit eget enim volutpat aliquam. Aenean sit amet tortor sem. Phasellus eu convallis nulla, lobortis venenatis massa. Duis accumsan est ac porttitor luctus. Donec tempor placerat est id pulvinar. Nulla facilisi. Sed eu mauris id est eleifend interdum. Proin vehicula libero lorem, a semper augue molestie rutrum. Pellentesque mollis velit ut nibh sodales maximus. Mauris varius cursus lacus ut laoreet. Fusce sollicitudin nisl eget ante vulputate, vitae sodales metus ultricies. Cras vitae mauris ipsum. Aliquam bibendum pharetra laoreet. Sed molestie ligula et ligula faucibus, sed hendrerit nisl mollis.",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id aliquet justo, et facilisis justo. Etiam in malesuada augue. Suspendisse potenti. Nunc euismod efficitur erat et consectetur. Sed non tempor tellus. Sed malesuada et augue non facilisis. Donec tempor fermentum lacus, quis dignissim mi sollicitudin id. Aenean at mollis ipsum. Maecenas ut urna ac odio eleifend facilisis. Suspendisse porta, turpis sit amet dignissim malesuada, eros leo condimentum mi, in volutpat ante erat a lacus. Fusce aliquam erat mi, non consectetur ante rutrum ut.",
        "Quisque vulputate ullamcorper sapien, sed faucibus eros consectetur id. Donec accumsan malesuada magna, tempus porta elit rutrum ac. Phasellus consectetur sed quam ut venenatis. Nulla eu euismod quam, ut pharetra orci. In non dolor pretium, tincidunt est vitae, malesuada risus. Maecenas semper rhoncus faucibus. Praesent ut lorem eget velit fringilla viverra. Nulla vehicula iaculis libero vitae placerat. Vivamus tincidunt, velit in sagittis euismod, eros dui tincidunt libero, quis dictum lectus ante quis lorem. Curabitur egestas eleifend est quis ultrices. In quis velit euismod, rutrum neque in, eleifend quam. Nam quis odio quis risus congue lobortis et eu augue.",
        "Nunc commodo accumsan ex. Vivamus scelerisque imperdiet velit ac venenatis. Vivamus auctor purus at mollis finibus. Mauris id facilisis ex, at bibendum dui. Nulla vitae sem fermentum, sagittis diam et, interdum urna. Nullam ac nisl id purus efficitur pretium. Fusce vel magna libero. Donec suscipit posuere neque id pharetra. Pellentesque iaculis augue vitae enim cursus mattis. Curabitur laoreet ex at nibh porttitor accumsan. Donec dolor lorem, vehicula ut vestibulum ut, pulvinar at nibh. Etiam vel tincidunt diam, nec mattis ipsum. Nunc vel ex neque. Nam dictum tincidunt libero, sed sagittis ante sagittis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec odio tempus, pulvinar diam vel, condimentum nisl.",
        "Sed egestas volutpat ante, vel consequat est tempor id. Nullam condimentum aliquam tempus. Nam vel massa ac nulla mattis pellentesque vitae sit amet neque. Aenean ut euismod metus, ut sagittis magna. Nam ultrices dictum libero at ultricies. Sed quis purus ornare, tincidunt quam ac, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae mauris quam. Etiam ornare sem in tempor venenatis. In hac habitasse platea dictumst. Praesent eget aliquam elit.",
      ],
    ],
    [
      "User 1",
      "GanGnam",
      "Punk",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at blandit libero. Fusce dictum venenatis nibh, quis dignissim tortor sollicitudin a. Pellentesque luctus ac diam vitae imperdiet. Fusce ultrices augue ultricies pulvinar efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tellus tortor, ullamcorper eget purus et, imperdiet volutpat diam. Duis tincidunt rhoncus sem id vulputate. Morbi mollis mauris sed purus vehicula, et aliquet nisi placerat. Nam massa sem, fringilla nec risus varius, sodales vestibulum nisi. Donec ultrices ex non nisl pretium, vitae iaculis augue varius. Nunc rhoncus rutrum posuere. Suspendisse sit amet neque euismod, dapibus felis vel, ultrices urna. Aliquam erat volutpat. Fusce ut velit sed justo ultrices porttitor.",
      55,
      [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mi non neque convallis malesuada. Phasellus malesuada lectus eget vehicula laoreet. Pellentesque auctor, mi at efficitur aliquet, ipsum elit sollicitudin risus, vel dapibus neque felis sit amet lorem. Mauris quis purus tellus. Aliquam erat volutpat. Ut sit amet venenatis dui, nec blandit erat. Nullam interdum eget lacus in congue.",
        "Donec efficitur mauris nec metus facilisis semper. Mauris vel sapien non urna euismod tempor. In tempus, libero ac commodo euismod, mauris dolor varius dui, nec fringilla nisl metus ac erat. Pellentesque id enim fermentum, tempor ante nec, interdum arcu. Proin luctus justo a quam mollis imperdiet. Curabitur metus massa, eleifend in iaculis eget, ultricies fringilla ex. Aenean ornare tincidunt ex id pretium. Nulla ut dolor ut magna aliquam accumsan. Maecenas commodo neque vel congue volutpat. In placerat, metus non viverra vestibulum, eros nunc porta enim, eget euismod massa augue eget massa. Sed vitae elementum magna. Quisque luctus arcu vitae maximus aliquet. Vivamus ullamcorper sollicitudin dui, in euismod metus fringilla id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel dapibus neque. Suspendisse sed scelerisque erat, quis tristique risus.",
        "Aliquam id feugiat elit, ut rutrum magna. Vestibulum ac elit eget enim volutpat aliquam. Aenean sit amet tortor sem. Phasellus eu convallis nulla, lobortis venenatis massa. Duis accumsan est ac porttitor luctus. Donec tempor placerat est id pulvinar. Nulla facilisi. Sed eu mauris id est eleifend interdum. Proin vehicula libero lorem, a semper augue molestie rutrum. Pellentesque mollis velit ut nibh sodales maximus. Mauris varius cursus lacus ut laoreet. Fusce sollicitudin nisl eget ante vulputate, vitae sodales metus ultricies. Cras vitae mauris ipsum. Aliquam bibendum pharetra laoreet. Sed molestie ligula et ligula faucibus, sed hendrerit nisl mollis.",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id aliquet justo, et facilisis justo. Etiam in malesuada augue. Suspendisse potenti. Nunc euismod efficitur erat et consectetur. Sed non tempor tellus. Sed malesuada et augue non facilisis. Donec tempor fermentum lacus, quis dignissim mi sollicitudin id. Aenean at mollis ipsum. Maecenas ut urna ac odio eleifend facilisis. Suspendisse porta, turpis sit amet dignissim malesuada, eros leo condimentum mi, in volutpat ante erat a lacus. Fusce aliquam erat mi, non consectetur ante rutrum ut.",
        "Quisque vulputate ullamcorper sapien, sed faucibus eros consectetur id. Donec accumsan malesuada magna, tempus porta elit rutrum ac. Phasellus consectetur sed quam ut venenatis. Nulla eu euismod quam, ut pharetra orci. In non dolor pretium, tincidunt est vitae, malesuada risus. Maecenas semper rhoncus faucibus. Praesent ut lorem eget velit fringilla viverra. Nulla vehicula iaculis libero vitae placerat. Vivamus tincidunt, velit in sagittis euismod, eros dui tincidunt libero, quis dictum lectus ante quis lorem. Curabitur egestas eleifend est quis ultrices. In quis velit euismod, rutrum neque in, eleifend quam. Nam quis odio quis risus congue lobortis et eu augue.",
        "Nunc commodo accumsan ex. Vivamus scelerisque imperdiet velit ac venenatis. Vivamus auctor purus at mollis finibus. Mauris id facilisis ex, at bibendum dui. Nulla vitae sem fermentum, sagittis diam et, interdum urna. Nullam ac nisl id purus efficitur pretium. Fusce vel magna libero. Donec suscipit posuere neque id pharetra. Pellentesque iaculis augue vitae enim cursus mattis. Curabitur laoreet ex at nibh porttitor accumsan. Donec dolor lorem, vehicula ut vestibulum ut, pulvinar at nibh. Etiam vel tincidunt diam, nec mattis ipsum. Nunc vel ex neque. Nam dictum tincidunt libero, sed sagittis ante sagittis sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec odio tempus, pulvinar diam vel, condimentum nisl.",
        "Sed egestas volutpat ante, vel consequat est tempor id. Nullam condimentum aliquam tempus. Nam vel massa ac nulla mattis pellentesque vitae sit amet neque. Aenean ut euismod metus, ut sagittis magna. Nam ultrices dictum libero at ultricies. Sed quis purus ornare, tincidunt quam ac, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae mauris quam. Etiam ornare sem in tempor venenatis. In hac habitasse platea dictumst. Praesent eget aliquam elit.",
      ],
    ],
  ];

  const [filteredSongs, setFilteredSongs] = useState(userSongs);
  const [filteredGenres, setFilteredGenres] = useState([]);
  const [filteredSongName, setFilteredSongName] = useState("");

  const setSearchFilter = () => {
    const filteredResults = userSongs.filter((song) => {
      return (
        song[1].toLowerCase().startsWith(filteredSongName.toLowerCase()) &&
        filteredGenres.includes(song[2])
      );
    });
    setFilteredSongs(filteredResults);
  };

  useEffect(() => {
    setSearchFilter();
  }, [filteredGenres, filteredSongName]);

  return (
    <>
      <Navbar></Navbar>
      <SearchBar setFilter={setFilteredSongName}></SearchBar>
      <div className="search-bar-genres">
        <GenresFilter
          setFilteredGenres={setFilteredGenres}
          initialChecked={true}
        ></GenresFilter>
      </div>
      {filteredSongs.map((song, index) => (
        <OtherSong
          key={index}
          username={song[0]}
          songName={song[1]}
          musicGenre={song[2]}
          description={song[3]}
          likesAmount={song[4]}
          oldComments={song[5]}
        ></OtherSong>
      ))}
    </>
  );
}

export default OtherSongs;
