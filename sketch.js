var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
var box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,box51,box52,box53,box54,box55,box56,box57,box58,box59,box60;
var box61,box62,box63,box64,box65,box66,box67,box68,box69,box70,box71,box72,box73,box74,box75;
var boy,boy2,trophy,trophy2,trophyImg;
var boy1Img,boy2Img;
var border1,border2,border3,border4;
var redkey,bluekey,yelokey;
var redkeyImg,blukeyImg,yellowkeyImg;
var redlock,bluelock,yellowlock;
var redImg,blueImg,yellowImg;

function preload(){
    boy1Img = loadImage("sprites/1.png");
    boy2Img = loadImage("sprites/2.png");
    trophyImg = loadImage("sprites/t.png");
    redkeyImg = loadImage("sprites/redkey.png");
    redImg = loadImage("sprites/redll.png");
    blukeyImg = loadImage("sprites/blukey.png");
    blueImg = loadImage("sprites/bluel.png");
    yellowkeyImg = loadImage("sprites/yelokey.png");
    yellowImg = loadImage("sprites/yellowl.png");
    nextlevelImg = loadImage("sprites/nt.png");
}
function setup(){
    var canvas = createCanvas(800,700);
    
    boy = createSprite(30,30,20,20);
    boy.addImage(boy1Img);
    boy.scale = 0.2;

    trophy = createSprite(398,615,20,20);
    trophy.addImage(trophyImg);
    trophy.scale = 0.2;

    border1 = createSprite(400,0,800,10);
    border2 = createSprite(800,350,10,800);
    border3 = createSprite(400,700,800,10);
    border4 = createSprite(0,350,10,800);
    
    redkey = createSprite(33,510,20,20);
    redkey.addImage(redkeyImg);
    redkey.scale = 0.2;

    redlock = createSprite(340,120,60,10);
    redlock.addImage(redImg);
    redlock.scale = 0.07;

    bluekey = createSprite(765,190,20,20);
    bluekey.addImage(blukeyImg);
    bluekey.scale = 0.1;

    bluelock = createSprite(460,487,20,20);
    bluelock.addImage(blueImg);
    bluelock.scale = 0.1;

    yelokey = createSprite(645,616,20,20);
    yelokey.addImage(yellowkeyImg);
    yelokey.scale = 0.1;

    yellowlock = createSprite(410,670,20,20);
    yellowlock.addImage(yellowImg);
    yellowlock.scale = 0.1;

    box1 = createSprite(95,57,66,5);
    box2 = createSprite(33,110,66,5);
    box3 = createSprite(125,110,5,110);
    box4 = createSprite(33,270,66,5);
    box5 = createSprite(64,215,5,110);
    box6 = createSprite(127,216,123,5);
    box7 = createSprite(189,162.5,122,5);
    box8 = createSprite(187,135,5,56);
    box9 = createSprite(248,57,128,5);
    box10 = createSprite(248,84,5,55);
    box11 = createSprite(309,192,5,266);
    box12 = createSprite(247,215,5,105);
    box13 = createSprite(217,270,65,5);
    box14 = createSprite(125,295,5,55);
    box15 = createSprite(370,30,5,55);
    box16 = createSprite(400,57,65,5);
    box17 = createSprite(523,57,65,5);
    box18 = createSprite(95,323,66,5);
    box19 = createSprite(187,349,5,164.5);
    box20 = createSprite(248,323,128,5);
    box21 = createSprite(491,84,5,55);
    box22 = createSprite(370,163,5,113);
    box23 = createSprite(523,110,308,5);
    box24 = createSprite(613,85,5,160);
    box25 = createSprite(705,57,65,5);
    box26 = createSprite(735,137,5,163);
    box27 = createSprite(705,162,65,5);
    box28 = createSprite(765,217,65,5);
    box29 = createSprite(492,162,128,5);
    box30 = createSprite(491,272,5,215);
    box31 = createSprite(64,430,5,215);
    box32 = createSprite(154,376,61,5);
    box33 = createSprite(399,270,65,5);
    box34 = createSprite(399,322,65,5);
    box35 = createSprite(430,320,5,215);
    box36 = createSprite(218,430,308,5);
    box37 = createSprite(309,376,128,5);
    box38 = createSprite(370,430,5,111);
    box39 = createSprite(552,270,5,215);
    box40 = createSprite(615,216,122,5);
    box41 = createSprite(33,536,66,5);
    box42 = createSprite(248,458,5,55);
    box43 = createSprite(186,482.5,128,5);
    box44 = createSprite(399,482,66,5);
    box45 = createSprite(674,245,5,55);
    box46 = createSprite(705,270,65,5);
    box47 = createSprite(735,295,5,55);
    box48 = createSprite(765,322,65,5);
    box49 = createSprite(613,295,5,55);
    box50 = createSprite(643,322,65,5);
    box51 = createSprite(674,350,5,55);
    box52 = createSprite(705,376,65,5);
    box53 = createSprite(583,376,65,5);
    box54 = createSprite(613,402,5,55);
    box55 = createSprite(522,429,187,5);
    box56 = createSprite(491,458,5,55);
    box57 = createSprite(674,456,5,57);
    box58 = createSprite(613,482,126,5);
    box59 = createSprite(735,510,5,265);
    box60 = createSprite(492,536,126,5);
    box61 = createSprite(552,536,5,110);
    box62 = createSprite(613,511,5,58);
    box63 = createSprite(674,560,5,58);
    box64 = createSprite(583,590,187,5);
    box65 = createSprite(613,615,5,56);
    box66 = createSprite(674,643,126,5);
    box67 = createSprite(491,669,5,55);
    box68 = createSprite(552,669,5,55);
    box69 = createSprite(430,562,5,164.5);
    box70 = createSprite(399,590,65,5);
    box71 = createSprite(308,562,5,164.5);
    box72 = createSprite(248,536,250,5);
    box73 = createSprite(125,562,5,55);
    box74 = createSprite(155,590,187,5);
    box75 = createSprite(246,643,370,5);

    //level 2

    boy2 = createSprite(30,30,20,20);
    boy2.addImage(boy1Img);
    boy2.scale = 0.2;
    boy2.visible = false;

    trophy2 = createSprite(278,672,20,20);
    trophy2.addImage(trophyImg);
    trophy2.scale = 0.2;
    trophy2.visible = false;
 
    redkey2 = createSprite(585,350,20,20);
    redkey2.addImage(redkeyImg);
    redkey2.scale = 0.2;
    redkey2.visible = false;

    redlock2 = createSprite(705,60,60,10);
    redlock2.addImage(redImg);
    redlock2.scale = 0.07;
    redlock2.visible = false;

    bluekey2 = createSprite(405,616,20,20);
    bluekey2.addImage(blukeyImg);
    bluekey2.scale = 0.08;
    bluekey2.visible = false;

    bluelock2 = createSprite(460,487,20,20);
    bluelock2.addImage(blueImg);
    bluelock2.scale = 0.1;
    bluelock2.visible = false;

    yelokey2 = createSprite(405,670,20,20);
    yelokey2.addImage(yellowkeyImg);
    yelokey2.scale = 0.1;
    yelokey2.visible = false;

    yellowlock2 = createSprite(59,510,20,20);
    yellowlock2.addImage(yellowImg);
    yellowlock2.scale = 0.1;
    yellowlock2.visible = false;
    
    button = createSprite(400,600);
    button.addImage(nextlevelImg);
    button.scale = 0.6;
    button.visible = false;


    box76 = createSprite(67,57,120,5);
    box77 = createSprite(126,84,5,56);
    box78 = createSprite(219,110,184,5);
    box79 = createSprite(309,138,5,56);
    box80 = createSprite(187,30,5,56);
    box81 = createSprite(248,30,5,56);
    box82 = createSprite(340,57,65,5);
    box83 = createSprite(370,84,5,54);
    box84 = createSprite(431,110,125,5);
    box85 = createSprite(431,58,5,108);
    box86 = createSprite(370,164,125,5);
    box87 = createSprite(65,163,5,110);
    box88 = createSprite(33,217,68,5);
    box89 = createSprite(126,190,5,58);
    box90 = createSprite(187,163,124,5);
    box91 = createSprite(248,189,5,58);
    box92 = createSprite(278,217,66,5);
    box93 = createSprite(187,217,5,110);
    box94 = createSprite(552,57,126,5);
    box95 = createSprite(613,84,5,56);
    box96 = createSprite(581,110,64,5);
    box97 = createSprite(552,138,5,55);
    box98 = createSprite(522,164,64,5);
    box99 = createSprite(674,30,5,56);
    box100 = createSprite(674,136,5,56);
    box101 = createSprite(644,164,64,5);
    box102 = createSprite(613,189,5,55);
    box103 = createSprite(431,217,5,108);
    box104 = createSprite(492,270,125,5);
    box105 = createSprite(492,326,5,322);
    box106 = createSprite(33,324,68,5);
    box107 = createSprite(216,270,309,5);
    box108 = createSprite(370,296,5,165);
    box109 = createSprite(126,322,5,108);
    box110 = createSprite(309,324,248,5);
    box111 = createSprite(735,189,5,272);
    box112 = createSprite(643,217,185,5);
    box113 = createSprite(644,270,65,5);
    box114 = createSprite(674,296,5,56);
    box115 = createSprite(643,324,185,5);
    box116 = createSprite(522,376,185,5);
    box117 = createSprite(613,404,5,165);
    box118 = createSprite(733,376,124,5);
    box119 = createSprite(644,430,187,5);
    box120 = createSprite(733,483,124,5);
    box121 = createSprite(185,376,253,5);
    box122 = createSprite(309,430,5,108);
    box123 = createSprite(370,430,125,5);
    box124 = createSprite(370,483,125,5);
    box125 = createSprite(65,456,5,58);
    box126 = createSprite(156,430,185,5);
    box127 = createSprite(187,456,5,58);
    box128 = createSprite(156,483,65,5);
    box129 = createSprite(126,510,5,58);
    box130 = createSprite(156,537,65,5);
    box131 = createSprite(187,565,5,58);
    box132 = createSprite(33,537,68,5);
    box133 = createSprite(65,592,5,112);
    box134 = createSprite(96,590,65,5);
    box135 = createSprite(96,645,65,5);
    box136 = createSprite(187,670,5,56);
    box137 = createSprite(248,537,5,220);
    box138 = createSprite(311,537,122,5);
    box139 = createSprite(278,643,66,5);
    box140 = createSprite(309,670,5,56);
    box141 = createSprite(522,483,64,5);
    box142 = createSprite(552,511,5,56);
    box143 = createSprite(644,537,187,5);
    box144 = createSprite(674,565,5,56);
    box145 = createSprite(431,537,5,108);
    box146 = createSprite(370,590,127,5);
    box147 = createSprite(370,617,5,57);
    box148 = createSprite(462,643,186,5);
    box149 = createSprite(431,670,5,56);
    box150 = createSprite(462,537,65,5);
    box151 = createSprite(492,565,5,58);
    box152 = createSprite(554,590,126,5);
    box153 = createSprite(614,618,5,55);
    box154 = createSprite(674,643,124,5);
    box155 = createSprite(735,617,5,57);

    box76.visible = false;
    box77.visible = false;
    box78.visible = false;
    box79.visible = false;
    box80.visible = false;
    box81.visible = false;
    box82.visible = false;
    box83.visible = false;
    box84.visible = false;
    box85.visible = false;
    box86.visible = false;
    box87.visible = false;
    box88.visible = false;
    box89.visible = false;
    box90.visible = false;
    box91.visible = false;
    box92.visible = false;
    box93.visible = false;
    box94.visible = false;
    box95.visible = false;
    box96.visible = false;
    box97.visible = false;
    box98.visible = false;
    box99.visible = false;
    box100.visible = false;
    box101.visible = false;
    box102.visible = false;
    box103.visible = false;
    box104.visible = false;
    box105.visible = false;
    box106.visible = false;
    box107.visible = false;
    box108.visible = false;
    box109.visible = false;
    box110.visible = false;
    box111.visible = false;
    box112.visible = false;
    box113.visible = false;
    box114.visible = false;
    box115.visible = false;
    box116.visible = false;
    box117.visible = false;
    box118.visible = false;
    box119.visible = false;
    box120.visible = false;
    box121.visible = false;
    box122.visible = false;
    box123.visible = false;
    box124.visible = false;
    box125.visible = false;
    box126.visible = false;
    box127.visible = false;
    box128.visible = false;
    box129.visible = false;
    box130.visible = false;
    box131.visible = false;
    box132.visible = false;
    box133.visible = false;
    box134.visible = false;
    box135.visible = false;
    box136.visible = false;
    box137.visible = false;
    box138.visible = false;
    box139.visible = false;
    box140.visible = false;
    box141.visible = false;
    box142.visible = false;
    box143.visible = false;
    box144.visible = false;
    box145.visible = false;
    box146.visible = false;
    box147.visible = false;
    box148.visible = false;
    box149.visible = false;
    box150.visible = false;
    box151.visible = false;
    box152.visible = false;
    box153.visible = false;
    box154.visible = false;
    box155.visible = false;
 }

function draw(){
  background("white");

     if(keyDown(LEFT_ARROW)){
       boy.addImage(boy2Img);
       boy.x = boy.x - 4;
     }
 
     if(keyDown(RIGHT_ARROW)){
       boy.addImage(boy1Img);
       boy.x = boy.x + 4;
     }
 
     if(keyDown(UP_ARROW)){
       boy.y = boy.y - 4;
     }
  
     if(keyDown(DOWN_ARROW)){
       boy.y = boy.y + 4;
     }

     if(boy.isTouching(redkey)){
       redkey.visible = false;
       redlock.destroy();
     }

    if(boy.isTouching(bluekey)){
      bluekey.visible = false;
      bluelock.destroy();
    }

    if(boy.isTouching(yelokey)){
      yelokey.visible = false;
      yellowlock.destroy();
    }

  drawSprites();

  boy.collide(border1);
  boy.collide(border2);
  boy.collide(border3);
  boy.collide(border4);

  boy.collide(box1);
  boy.collide(box2);
  boy.collide(box3);
  boy.collide(box4);
  boy.collide(box5);
  boy.collide(box6);
  boy.collide(box7);
  boy.collide(box8);
  boy.collide(box9);
  boy.collide(box10);
  boy.collide(box11);
  boy.collide(box12);
  boy.collide(box13);
  boy.collide(box14);
  boy.collide(box15);
  boy.collide(box16);
  boy.collide(box17);
  boy.collide(box18);
  boy.collide(box19);
  boy.collide(box20);
  boy.collide(box21);
  boy.collide(box22);
  boy.collide(box23);
  boy.collide(box24);
  boy.collide(box25);
  boy.collide(box26);
  boy.collide(box27);
  boy.collide(box28);
  boy.collide(box29);
  boy.collide(box30);
  boy.collide(box31);
  boy.collide(box32);
  boy.collide(box33);
  boy.collide(box34);
  boy.collide(box35);
  boy.collide(box36);
  boy.collide(box37);
  boy.collide(box38);
  boy.collide(box39);
  boy.collide(box40);
  boy.collide(box41);
  boy.collide(box42);
  boy.collide(box43);
  boy.collide(box44);
  boy.collide(box45);
  boy.collide(box46);
  boy.collide(box47);
  boy.collide(box48);
  boy.collide(box49);
  boy.collide(box50);
  boy.collide(box51);
  boy.collide(box52);
  boy.collide(box53);
  boy.collide(box54);
  boy.collide(box55);
  boy.collide(box56);
  boy.collide(box57);
  boy.collide(box58);
  boy.collide(box59);
  boy.collide(box60);
  boy.collide(box61);
  boy.collide(box62);
  boy.collide(box63);
  boy.collide(box64);
  boy.collide(box65);
  boy.collide(box66);
  boy.collide(box67);
  boy.collide(box68);
  boy.collide(box69);
  boy.collide(box70);
  boy.collide(box71);
  boy.collide(box72);
  boy.collide(box73);
  boy.collide(box74);
  boy.collide(box75);
  boy.collide(redlock);
  boy.collide(bluelock);
  boy.collide(yellowlock);

  if(boy.isTouching(trophy)){
    button.visible = true;
    background("grey");
    trophy.visible = false;
    boy.visible = false;
    boy2.x = 30;
    boy2.y = 30;
  }

  if(boy2.isTouching(trophy2)){
    fill("black");
    textSize(50);
    text("You Win",400,400);
    background("grey");
    trophy2.visible = false;
    boy2.visible = false;

    box76.visible = false;
    box77.visible = false;
    box78.visible = false;
    box79.visible = false;
    box80.visible = false;
    box81.visible = false;
    box82.visible = false;
    box83.visible = false;
    box84.visible = false;
    box85.visible = false;
    box86.visible = false;
    box87.visible = false;
    box88.visible = false;
    box89.visible = false;
    box90.visible = false;
    box91.visible = false;
    box92.visible = false;
    box93.visible = false;
    box94.visible = false;
    box95.visible = false;
    box96.visible = false;
    box97.visible = false;
    box98.visible = false;
    box99.visible = false;
    box100.visible = false;
    box101.visible = false;
    box102.visible = false;
    box103.visible = false;
    box104.visible = false;
    box105.visible = false;
    box106.visible = false;
    box107.visible = false;
    box108.visible = false;
    box109.visible = false;
    box110.visible = false;
    box111.visible = false;
    box112.visible = false;
    box113.visible = false;
    box114.visible = false;
    box115.visible = false;
    box116.visible = false;
    box117.visible = false;
    box118.visible = false;
    box119.visible = false;
    box120.visible = false;
    box121.visible = false;
    box122.visible = false;
    box123.visible = false;
    box124.visible = false;
    box125.visible = false;
    box126.visible = false;
    box127.visible = false;
    box128.visible = false;
    box129.visible = false;
    box130.visible = false;
    box131.visible = false;
    box132.visible = false;
    box133.visible = false;
    box134.visible = false;
    box135.visible = false;
    box136.visible = false;
    box137.visible = false;
    box138.visible = false;
    box139.visible = false;
    box140.visible = false;
    box141.visible = false;
    box142.visible = false;
    box143.visible = false;
    box144.visible = false;
    box145.visible = false;
    box146.visible = false;
    box147.visible = false;
    box148.visible = false;
    box149.visible = false;
    box150.visible = false;
    box151.visible = false;
    box152.visible = false;
    box153.visible = false;
    box154.visible = false;
    box155.visible = false;
  }

    if(mousePressedOver(button)){
      button.visible = false;
      boy2.visible = true;
      boy.destroy();
      trophy.destroy();
      background("white");
      box1.destroy();
      box2.destroy();
      box3.destroy();
      box4.destroy();
      box5.destroy();
      box6.destroy();
      box7.destroy();
      box8.destroy();
      box9.destroy();
      box10.destroy();
      box11.destroy();
      box12.destroy();
      box13.destroy();
      box14.destroy();
      box15.destroy();
      box16.destroy();
      box17.destroy();
      box18.destroy();
      box19.destroy();
      box20.destroy();
      box21.destroy();
      box22.destroy();
      box23.destroy();
      box24.destroy();
      box25.destroy();
      box26.destroy();
      box27.destroy();
      box28.destroy();
      box29.destroy();
      box30.destroy();
      box31.destroy();
      box32.destroy();
      box33.destroy();
      box34.destroy();
      box35.destroy();
      box36.destroy();
      box37.destroy();
      box38.destroy();
      box39.destroy();
      box40.destroy();
      box41.destroy();
      box42.destroy();
      box43.destroy();
      box44.destroy();
      box45.destroy();
      box46.destroy();
      box47.destroy();
      box48.destroy();
      box49.destroy();
      box50.destroy();
      box51.destroy();
      box52.destroy();
      box53.destroy();
      box54.destroy();
      box55.destroy();
      box56.destroy();
      box57.destroy();
      box58.destroy();
      box59.destroy();
      box60.destroy();
      box61.destroy();
      box62.destroy();
      box63.destroy();
      box64.destroy();
      box65.destroy();
      box66.destroy();
      box67.destroy();
      box68.destroy();
      box69.destroy();
      box70.destroy();
      box71.destroy();
      box72.destroy();
      box73.destroy();
      box74.destroy();
      box75.destroy();

    box76.visible = true;
    box77.visible = true;
    box78.visible = true;
    box79.visible = true;
    box80.visible = true;
    box81.visible = true;
    box82.visible = true;
    box83.visible = true;
    box84.visible = true;
    box85.visible = true;
    box86.visible = true;
    box87.visible = true;
    box88.visible = true;
    box89.visible = true;
    box90.visible = true;
    box91.visible = true;
    box92.visible = true;
    box93.visible = true;
    box94.visible = true;
    box95.visible = true;
    box96.visible = true;
    box97.visible = true;
    box98.visible = true;
    box99.visible = true;
    box100.visible = true;
    box101.visible = true;
    box102.visible = true;
    box103.visible = true;
    box104.visible = true;
    box105.visible = true;
    box106.visible = true;
    box107.visible = true;
    box108.visible = true;
    box109.visible = true;
    box110.visible = true;
    box111.visible = true;
    box112.visible = true;
    box113.visible = true;
    box114.visible = true;
    box115.visible = true;
    box116.visible = true;
    box117.visible = true;
    box118.visible = true;
    box119.visible = true;
    box120.visible = true;
    box121.visible = true;
    box122.visible = true;
    box123.visible = true;
    box124.visible = true;
    box125.visible = true;
    box126.visible = true;
    box127.visible = true;
    box128.visible = true;
    box129.visible = true;
    box130.visible = true;
    box131.visible = true;
    box132.visible = true;
    box133.visible = true;
    box134.visible = true;
    box135.visible = true;
    box136.visible = true;
    box137.visible = true;
    box138.visible = true;
    box139.visible = true;
    box140.visible = true;
    box141.visible = true;
    box142.visible = true;
    box143.visible = true;
    box144.visible = true;
    box145.visible = true;
    box146.visible = true;
    box147.visible = true;
    box148.visible = true;
    box149.visible = true;
    box150.visible = true;
    box151.visible = true;
    box152.visible = true;
    box153.visible = true;
    box154.visible = true;
    box155.visible = true;
    trophy2.visible = true;
    redkey2.visible = true;
    redlock2.visible = true;
    bluekey2.visible = true;
    bluelock2.visible = true;
    yelokey2.visible = true;
    yellowlock2.visible = true;
   

    }


  //level 2
  
  if(keyDown(LEFT_ARROW)){
    boy2.addImage(boy2Img);
    boy2.x = boy2.x - 4;
  }

  if(keyDown(RIGHT_ARROW)){
    boy2.addImage(boy1Img);
    boy2.x = boy2.x + 4;
  }

  if(keyDown(UP_ARROW)){
    boy2.y = boy2.y - 4;
  }

  if(keyDown(DOWN_ARROW)){
    boy2.y = boy2.y + 4;
  }

  if(boy2.isTouching(redkey2)){
    redkey2.visible = false;
    redlock2.destroy();
  }

 if(boy2.isTouching(bluekey2)){
   bluekey2.visible = false;
   bluelock2.destroy();
 }

 if(boy2.isTouching(yelokey2)){
   yelokey2.visible = false;
   yellowlock2.destroy();
 }

  boy2.collide(border1);
  boy2.collide(border2);
  boy2.collide(border3);
  boy2.collide(border4);

  boy2.collide(box76);
  boy2.collide(box77);
  boy2.collide(box78);
  boy2.collide(box79);
  boy2.collide(box80);
  boy2.collide(box81);
  boy2.collide(box82);
  boy2.collide(box83);
  boy2.collide(box84);
  boy2.collide(box85);
  boy2.collide(box86);
  boy2.collide(box87);
  boy2.collide(box88);
  boy2.collide(box89);
  boy2.collide(box90);
  boy2.collide(box91);
  boy2.collide(box92);
  boy2.collide(box93);
  boy2.collide(box94);
  boy2.collide(box95);
  boy2.collide(box96);
  boy2.collide(box97);
  boy2.collide(box98);
  boy2.collide(box99);
  boy2.collide(box100);
  boy2.collide(box101);
  boy2.collide(box102);
  boy2.collide(box103);
  boy2.collide(box104);
  boy2.collide(box105);
  boy2.collide(box106);
  boy2.collide(box107);
  boy2.collide(box108);
  boy2.collide(box109);
  boy2.collide(box110);
  boy2.collide(box111);
  boy2.collide(box112);
  boy2.collide(box113);
  boy2.collide(box114);
  boy2.collide(box115);
  boy2.collide(box116);
  boy2.collide(box117);
  boy2.collide(box118);
  boy2.collide(box119);
  boy2.collide(box120);
  boy2.collide(box121);
  boy2.collide(box122);
  boy2.collide(box123);
  boy2.collide(box124);
  boy2.collide(box125);
  boy2.collide(box126);
  boy2.collide(box127);
  boy2.collide(box128);
  boy2.collide(box129);
  boy2.collide(box130);
  boy2.collide(box131);
  boy2.collide(box132);
  boy2.collide(box133);
  boy2.collide(box134);
  boy2.collide(box135);
  boy2.collide(box136);
  boy2.collide(box137);
  boy2.collide(box138);
  boy2.collide(box139);
  boy2.collide(box140);
  boy2.collide(box141);
  boy2.collide(box142);
  boy2.collide(box143);
  boy2.collide(box144);
  boy2.collide(box145);
  boy2.collide(box146);
  boy2.collide(box147);
  boy2.collide(box148);
  boy2.collide(box149);
  boy2.collide(box150);
  boy2.collide(box151);
  boy2.collide(box152);
  boy2.collide(box153);
  boy2.collide(box154);
  boy2.collide(box155);
  boy2.collide(redlock2);
  boy2.collide(bluelock2);
  boy2.collide(yellowlock2);

  if(boy2.isTouching(trophy2)){
    background("grey");
    trophy.visible = false;
    boy2.visible = false;
    textSize(50);
    fill("white");
    text("YOU WIN",298,380);
 }

 drawSprites();
}
 