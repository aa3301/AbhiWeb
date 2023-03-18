const menu = [
    {
      id: 1,
      title: "Cricket",
            img: "./photos/cricket.jpg",
      desc: `Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this and dismiss each batter.`,
    },
    {
      id: 2,
      title: "FootBall",
      img: "./photos/football.jpg",
      desc: `Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football,gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.These various forms of football share to varying extents common origins and are known as "football codes".`,

      
    },
    {
      id: 3,
      title: "TableTennis",
      img: "./photos/tabletennis.jpg",
      desc: `Table tennis, also known as ping-pong and whiff-whaff, is a racket sport derived from tennis but distinguished by its playing surface being atop a stationary table, rather than the court on which players stand. Either individually or in teams of two, players take alternating turns returning a light, hollow ball over the table's net onto the opposing half of the court using small rackets until they fail to do so, which results in a point for the opponent. Play is fast, requiring quick reaction and constant attention, and is characterized by an emphasis on spin relative to other ball sports, which can heavily affect the ball's trajectory`,
    },
    {
      id: 4,
      title: "Rugby",
      img: "./photos/rugby.jpg",
      desc: `World Rugby is the world governing body for the sport of rugby union.World Rugby organises the Rugby World Cup every four years, the sport's most recognised and most profitable competition. It also organises a number of other international rugby competitions, such as the World Rugby Sevens Series, the Rugby World Cup Sevens, the World Under 20 Championship, and the Pacific Nations Cup.

      World Rugby's headquarters are in Dublin, Ireland.Its membership now comprises 120 national unions.Each member country must also be a member of one of the six regional unions into which the world is divided: Africa, Americas North, Asia, Europe, South America, and Oceania. `,
    },
    {
      id: 5,
      title: "BasketBall",
       img: "./photos/basketball.jpg",
      desc: `Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop in diameter mounted 10 feet high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one, two or three one-point free throws.`,
    }];
    const sectionCenter = document.querySelector(".section");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
 
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<section class="section">
    <div class="desc">
    <div class="thumbnail"><img src="${item.img}" alt="${item.title}"></div>
    <div class="paras">
        <h2>${item.title}</h2>
        <div class="sectionsubTag">
        <p class="text-small">${item.desc}</p>
       
       <div class="a">
        <a  href="Contact Now.html">Order</a>
        </div>
    </div>
 
</div>

</div>


    
</section>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();