const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var productName=["bidar'sBidriWare","TerracottaDollsBishnupur","BambooCraftAssam","CalcuttaSariThrow","BanjaraEmbroidery","HimalayanTapestry","CrochetBlanket","LacSpinningToyTop","AshaBracelet","ClassicFreshwaterPearlJwellerySet","TheLuckyBracelet","IndianMosaicFrame"];
var productImage=["1","2","3","4","5","6","7","8","9","10","11","12"];
var productPrice=["2500","1500","800","1000","1200","1800","1500","300","1300","2200","400","900"];
var productDecs=["Bidri Ware employs skilled artisans in a southern Indian town. The artisans use an ancient handicraft skill that features alloy of zinc and copper inlaid with thin sheets of silver. The eight-stage process entails molding, smoothing, chiseling, engraving, silver inlaying, smoothing (again), buffing, and oxidizing. Through their employment with Bidri Ware, the artisans receive increased payment for their work, which allows them to better provide for their families.","The scarring influence of the sex trade does not affect just one generation in India. Despairing mothers often leave a legacy of poverty and prostitution to their daughters, who in turn carry on because they know no other lifestyle. Enter Love Calcutta Arts.Their handicrafts unit enables young women to support themselves with dignity and help their mothers leave the sex industry. These hardworking women make high-quality handmade paper products in a loving environment where they learn of their Father’s love for them.","Assam is rich in sylvan resources and most of its forests are richly stocked with bamboo and canes of various species. Bamboo is a raw material of great versatility and forms an integral part of the lifestyle and economy of Assam. Special mention may however be made of the forests of Mizo Hills, Cachar, Mikir and North Cachar Hills, Nowgong and Lakhimpur districts.","The young women of Shelano have come from the slums in the south of Kolkata, India. Finding a job is difficult, if not impossible, with their background and limited education. By purchasing their handmade products, you are not only getting a fairly-traded product, but also giving a woman an opportunity to take care of her family and invest in the future. Each throw is unique and is made by a unique woman with a unique story. As it goes from her hands to yours, you are help a woman earn some money of her own and contribute to her confidence and well-being.","Mary grew up in an orphanage in India with a bleak outlook for her future. When time came for her to leave the orphanage, she was deceived by an offer of marriage and found herself instead in a brothel. She escaped and tried to commit suicide multiple times, the last time by eating glass. A member of Rahab’s Rope artisan group found her dying in the street and brought her to the center. Many young women like Mary have found a lifeline at Rahab’s Rope, where they discover new opportunities while making handcrafted items.","Within each stitch of the Himalayan Tapestry artisans’ handiwork is a story of illiteracy, abuse within marriage, and culturally conditioned gender discrimination. While these Indian women suffer quietly, they are expected to carry the financial burden of their families. The women come to Himalayan Tapestry with little education and no basic skills, but here they learn to quilt, tailor, read, and manage money. Working with this organization enables women to make money from their new talents, and it enables them to receive crisis counseling, which brings financial and emotional comfort to their troubled lives.","In some villages of India, a woman may not remarry, even if her husband has passed away. This tradition forces women to become the sole provider for their children, even though they don’t have any marketable skills. Godavari Women, a group of artisans that creates crocheted lace items, allows women to completely depend on their artisan skills for their income. They also gain medical insurance, first aid, eye checkups, and free eyeglasses. Godavari Women’s dream is to teach and train all 25,000 artisans living in this area to use and hone their talents.","located in a quaint southern Indian town. The artisans use a special skill called lac-turney, a 200-year-old craft traced to the reign of a royal ruler who invited artisans from Persia to train the local artisans in making wooden toys. The process of shaping and coloring the wood is carried out on a lathe, a machine that turns pieces of wood while the artisans use sharp tools to shape them. Artisans then apply a vibrantly colored lacquer made by mixing natural, nontoxic vegetable dyes. These lac-turney products are carved from hale wood, also called ivory wood, a local species of tree that grows widely throughout south India. Usually the entire tree is not felled, and the tree grows back. Therefore, the materials used in the craft are natural and eco-friendly","Gift your loved ones a bracelt ,whose every bead shows the love and affection you have towards them.","A classic jwellery derived from the royal indian culture and definetly adds up to the beauty","A bracelet that carries love and affection.The bracelet of faith that birins on luck by your side","Get yourself a perfectly customised classical mosaic frame made by the experienced artists from the heart of india varanasi"];
//let person_name="kanhaiya";
var pName;
var pDesc;
var pImg;
var pPrice;
app.get("/products/:pageName",function(req,res){
pName=req.params.pageName;
for(let i=0;i<productName.length;i++){
  if(pName===productName[i]){
    pDesc=productDecs[i];
    pImg=productImage[i];
    pPrice=productPrice[i];
  }
}
  res.render('product',{product:pName,desc:pDesc,image:pImg,price:pPrice});
  res.redirect("/");
});
app.get("/",function(req,res){
  res.render('test',{productName:productName,image:productImage[0]});
});

app.get("/products",function(req,res){
  res.render('xyz',{product:productName,image:productImage});
});

app.get("/cart",function(req,res){
  res.render('cart',{product:pName,image:pImg,price:pPrice});
});

app.get("/about",function(req,res){
  res.render('about');
});

app.get("/contact",function(req,res){
  res.render('contact');
});

app.listen(3000);
