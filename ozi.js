const { MessageEmbed, Client } = require('discord.js');
const client = new Client({ fetchAllMembers: true });
const buttons = require('discord-buttons')
buttons(client);
const { MessageMenu, MessageMenuOption } = require('discord-buttons');

client.settings = {
/////////////////////iliski rolleri///////////////////////
  menu_role_1: "843229104820191243",
  menu_role_2: "843229104820191242",
  menu_role_3: "843229104807477317",
/////////////////////iliski rolleri///////////////////////

/////////////////////etkinlik rolleri///////////////////////
  menu_role_4: "859099285534146601",
  menu_role_5: "859099278747107348",
/////////////////////etkinlik rolleri///////////////////////

/////////////////////burç rolleri///////////////////////
  menu_role_6: "843229104828710926",
  menu_role_7: "843229104828710925",
  menu_role_8: "843229104828710924",
  menu_role_9: "843229104828710923",
  menu_role_10: "843229104828710922",
  menu_role_11: "843229104820191251",
  menu_role_12: "843229104820191250",
  menu_role_13: "843229104820191249",
  menu_role_14: "843229104820191248",
  menu_role_15: "843229104820191247",
  menu_role_16: "843229104820191246",
  menu_role_17: "843229104820191245",
/////////////////////burç rolleri///////////////////////

/////////////////////renk rolleri///////////////////////
  menu_role_18: "873333811029610527",
  menu_role_19: "873206086847565824",
  menu_role_20: "873334541006282783",
  menu_role_21: "873334698254938112",
  menu_role_22: "873334751530987590",
  menu_role_23: "873335030875844618",
////////////////////renk rolleri////////////////////////

  token: "",
  prefix: ".",
};

client.on("message", async(message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "start" /* setup message */) { return false } else {

    let option_1 = new MessageMenuOption()
    .setLabel("Couple")
    .setValue("1")
    .setDescription("Sevgilisi olanlar için rol.")
    .setDefault()
    .setEmoji("871400732438446130") // emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_2 = new MessageMenuOption()
      .setLabel("Alone")
      .setValue("2")
      .setDescription("Yalnız olanlar için rol.")
      .setDefault()
      .setEmoji("871400742848725022") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_3 = new MessageMenuOption()
      .setLabel("Sevgili Yapmıyorum")
      .setValue("3")
      .setDescription("Sevgili yapmayanlar için rol.")
      .setDefault()
      .setEmoji("871400756333412352") // emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

let option_56 = new MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setValue("56")
      .setDescription("Sunucudaki İlişki rollerini temizlemek için.")
      .setDefault()
      .setEmoji("🗑️") // emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz


    let selection = new MessageMenu()
    .setID("selector")

    .setPlaceholder("İlişki Rolleri")
    .addOption(option_1)
    .addOption(option_2)
    .addOption(option_3)
    .addOption(option_56)

    
    /* var embed = new MessageEmbed()
    .setColor("RANDOM")
    //.setTitle("xd")
    //.setDescipriton("xd")
    let msg = await message.channel.send(embed, selection)
    */

    let msg = await message.channel.send("Rol seçmek için aşağıdaki menüyü kullanabilirsiniz.", selection); 
    

    client.on("clickMenu", async (menu) => {
      if(menu.message.id === msg.id) {
        menuselect(menu)
      }
    })
  };

async function menuselect(menu) {
  switch(menu.values[0]) {
      case "1":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_1)
         await menu.clicker.member.roles.remove(client.settings.menu_role_2)
         await menu.clicker.member.roles.remove(client.settings.menu_role_3)

        break;
          
      case "2":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_2)
         await menu.clicker.member.roles.remove(client.settings.menu_role_1)
         await menu.clicker.member.roles.remove(client.settings.menu_role_3)

        break;
      case "3":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_3)
         await menu.clicker.member.roles.remove(client.settings.menu_role_1)
         await menu.clicker.member.roles.remove(client.settings.menu_role_2)

        break;

      case "56":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.remove(client.settings.menu_role_1)
         await menu.clicker.member.roles.remove(client.settings.menu_role_2)
         await menu.clicker.member.roles.remove(client.settings.menu_role_3)

        break;
      default:
          
        break;
  }
}

});



/////////////////////////////////////İliski Seçim////////////////////////////////
/////////////////////////////////////Etkinlik Seçim////////////////////////////////

client.on("message", async(message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "start" /* setup message */) { return false } else {

    let option_4 = new MessageMenuOption()
    .setLabel("Çekiliş")
    .setValue("4")
    .setDescription("Sunucudaki çekilişlerden haberdar olmak için rol.")
    .setDefault()
    .setEmoji("871388909672747048") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_5 = new MessageMenuOption()
      .setLabel("Etkinlik")
      .setValue("5")
      .setDescription("Sunucudaki etkinliklerden haberdar olmak için rol.")
      .setDefault()
      .setEmoji("868862339171106886") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

let option_55 = new MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setValue("55")
      .setDescription("Sunucudaki Katılımcı rollerini temizlemek için.")
      .setDefault()
      .setEmoji("🗑️") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let selection = new MessageMenu()
    .setID("selector")

    .setPlaceholder("Katılımcı Rolleri")
    .addOption(option_4)
    .addOption(option_5)
    .addOption(option_55)

    
    /* var embed = new MessageEmbed()
    .setColor("RANDOM")
    //.setTitle("xd")
    //.setDescipriton("xd")
    let msg = await message.channel.send(embed, selection)
    */
    
    let msg = await message.channel.send("İçine istediğini yaz canımın içi ama bos bırakma hata alırsın istersen emot koy çubuk gibi diz arasına ayraç gibi ne bilim iste", selection); 

    client.on("clickMenu", async (menu) => {
      if(menu.message.id === msg.id) {
        menuselect(menu)
      }
    })
  };

async function menuselect(menu) {
  switch(menu.values[0]) {
      case "4":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_4)
        break;
          
      case "5":
          menu.reply.send("Rollerin düzenlendi!", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_5)
        break;

      case "55":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.remove(client.settings.menu_role_4)
         await menu.clicker.member.roles.remove(client.settings.menu_role_5)
        break;
      default:
          
        break;
  }
}

});
/////////////////////////////////////Etkinlik Seçim////////////////////////////////
/////////////////////////////////////Burç Seçim////////////////////////////////

client.on("message", async(message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "start" /* setup message */) { return false } else {

    let option_6 = new MessageMenuOption()
    .setLabel("İkizler")
    .setValue("6")
    .setDescription("İkizler Burcu için rol.")
    .setDefault()
    .setEmoji("871483369358258226") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_7 = new MessageMenuOption()
      .setLabel("Yengeç")
      .setValue("7")
      .setDescription("Yengeç Burcu için rol.")
      .setDefault()
      .setEmoji("871483468859711530") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_8 = new MessageMenuOption()
      .setLabel("Boğa")
      .setValue("8")
      .setDescription("Boğa Burcu için rol.")
      .setDefault()
      .setEmoji("871483354464272395") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_9 = new MessageMenuOption()
      .setLabel("Koç")
      .setValue("9")
      .setDescription("Koç Burcu için rol.")
      .setDefault()
      .setEmoji("871483379546193950") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_10 = new MessageMenuOption()
      .setLabel("Akrep")
      .setValue("10")
      .setDescription("Akrep Burcu için rol.")
      .setDefault()
      .setEmoji("871483306213015583") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_11 = new MessageMenuOption()
      .setLabel("Terazi")
      .setValue("11")
      .setDescription("Terazi Burcu için rol.")
      .setDefault()
      .setEmoji("871483433950543942") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_12 = new MessageMenuOption()
      .setLabel("Başak")
      .setValue("12")
      .setDescription("Başak Burcu için rol.")
      .setDefault()
      .setEmoji("871483341931696188") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_13 = new MessageMenuOption()
      .setLabel("Aslan")
      .setValue("13")
      .setDescription("Aslan Burcu için rol.")
      .setDefault()
      .setEmoji("871483317881557042") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_14 = new MessageMenuOption()
      .setLabel("Balık")
      .setValue("14")
      .setDescription("Balık Burcu için rol.")
      .setDefault()
      .setEmoji("871483330774827149") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_15 = new MessageMenuOption()
      .setLabel("Kova")
      .setValue("15")
      .setDescription("Kova Burcu için rol.")
      .setDefault()
      .setEmoji("871483391286083605") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_16 = new MessageMenuOption()
      .setLabel("Oğlak")
      .setValue("16")
      .setDescription("Oğlak Burcu için rol.")
      .setDefault()
      .setEmoji("871483405748031549") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_17 = new MessageMenuOption()
      .setLabel("Yay")
      .setValue("17")
      .setDescription("Yay Burcu için rol.")
      .setDefault()
      .setEmoji("871483448173416468") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz


    let selection = new MessageMenu()
    .setID("selector")

    .setPlaceholder("Burç Rolleri")
    .addOption(option_6)
    .addOption(option_7)
    .addOption(option_8)
    .addOption(option_9)
    .addOption(option_10)
    .addOption(option_11)
    .addOption(option_12)
    .addOption(option_13)
    .addOption(option_14)
    .addOption(option_15)
    .addOption(option_16)
    .addOption(option_17)


    
    /* var embed = new MessageEmbed()
    .setColor("RANDOM")
    //.setTitle("xd")
    //.setDescipriton("xd")
    let msg = await message.channel.send(embed, selection)
    */
    
    let msg = await message.channel.send("İçine istediğini yaz canımın içi ama bos bırakma hata alırsın istersen emot koy çubuk gibi diz arasına ayraç gibi ne bilim iste", selection); 

    client.on("clickMenu", async (menu) => {
      if(menu.message.id === msg.id) {
        menuselect(menu)
      }
    })
  };

async function menuselect(menu) {
  switch(menu.values[0]) {
case "6":
          menu.reply.send("Rollerin düzenlendi!", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_6)
await menu.clicker.member.roles.remove(["843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 7 numaralı rol id /////8 numaralı rol id/////9 numaralı rol id/////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id
          
case "7":
          menu.reply.send("Rollerin düzenlendi!", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_7)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////8 numaralı rol id/////9 numaralı rol id/////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "8":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_8)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////9 numaralı rol id/////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "9":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_9)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "10":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_10)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "11":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_11)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "12":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_12)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////11 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "13":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_13)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191248", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////14 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "14":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_14)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191247", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////15 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "15":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_15)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191246", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////16 numaralı rol id/////17 numaralı rol id

case "16":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_16)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191245"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id/////17 numaralı rol id

case "17":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_17)
await menu.clicker.member.roles.remove(["843229104828710926" , "843229104828710925", "843229104828710924", "843229104828710923", "843229104828710922", "843229104820191251", "843229104820191250", "843229104820191249", "843229104820191248", "843229104820191247", "843229104820191246"])
        break;// üstte yazdığına gore / 6 numaralı rol id /////7 numaralı rol id/////8 numaralı rol id/////9 numaralı rol id////10 numaralı rol id////11 numaralı rol id////12 numaralı rol id////13 numaralı rol id////14 numaralı rol id////15 numaralı rol id/////16 numaralı rol id

      default:
          
        break;
  }
}

});
/////////////////////////////////////Burç Seçim////////////////////////////////
/////////////////////////////////////Renk Seçim////////////////////////////////

client.on("message", async(message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "start" /* setup message */) { return false } else {

    let option_18 = new MessageMenuOption()
    .setLabel("Sarı")
    .setValue("18")
    .setDescription("Sarı Renk için rol.")
    .setDefault()
    .setEmoji("873349565103878154") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_19 = new MessageMenuOption()
      .setLabel("Kırmızı")
      .setValue("19")
      .setDescription("Kırmızı Renk için rol.")
      .setDefault()
      .setEmoji("873349647647785001") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_20 = new MessageMenuOption()
      .setLabel("Turuncu")
      .setValue("20")
      .setDescription("Turuncu Renk için rol.")
      .setDefault()
      .setEmoji("873349634049855558") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_21 = new MessageMenuOption()
      .setLabel("Pembe")
      .setValue("21")
      .setDescription("Pembe Renk için rol.")
      .setDefault()
      .setEmoji("873349675778986024") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_22 = new MessageMenuOption()
      .setLabel("Lacivert")
      .setValue("22")
      .setDescription("Lacivert Renk için rol.")
      .setDefault()
      .setEmoji("873349660486557707") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

    let option_23 = new MessageMenuOption()
      .setLabel("Yeşil")
      .setValue("23")
      .setDescription("Yeşil Renk için rol.")
      .setDefault()
      .setEmoji("873349690454863882") //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

let option_24 = new MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setValue("24")
      .setDescription("Sunucudaki Renk rollerini temizlemek için.")
      .setDefault()
      .setEmoji("🗑️") //  you can add emoji next to the label

    let selection = new MessageMenu()
    .setID("selector")

    .setPlaceholder("Renk Rolleri")
    .addOption(option_18)
    .addOption(option_19)
    .addOption(option_20)
    .addOption(option_21)
    .addOption(option_22)
    .addOption(option_23)
    .addOption(option_24)


    /* var embed = new MessageEmbed()
    .setColor("RANDOM")
    //.setTitle("xd")
    //.setDescipriton("xd")
    let msg = await message.channel.send(embed, selection)
    */
    
    let msg = await message.channel.send("İçine istediğini yaz canımın içi ama bos bırakma hata alırsın istersen emot koy çubuk gibi diz arasına ayraç gibi ne bilim iste", selection); 

    client.on("clickMenu", async (menu) => {
      if(menu.message.id === msg.id) {
        menuselect(menu)
      }
    })
  };

async function menuselect(menu) {
  switch(menu.values[0]) {
case "18":
          menu.reply.send("Rollerin düzenlendi!", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_18)
await menu.clicker.member.roles.remove(["873206086847565824", "873334541006282783", "873334698254938112", "873334751530987590", "873335030875844618"])
        break;// üstte yazdığına gore / 19 numaralı rol id /////20 numaralı rol id/////21 numaralı rol id/////22 numaralı rol id////23 numaralı rol id////
          
case "19":
          menu.reply.send("Rollerin düzenlendi!", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_19)
await menu.clicker.member.roles.remove(["873333811029610527" , "873334541006282783", "873334698254938112", "873334751530987590", "873335030875844618"])
        break;// üstte yazdığına gore / 18 numaralı rol id /////20 numaralı rol id////21 numaralı rol id/////22 numaralı rol id////23 numaralı rol id////

case "20":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_20)
await menu.clicker.member.roles.remove(["873333811029610527" , "873206086847565824","873334698254938112", "873334751530987590", "873335030875844618"])
        break;// üstte yazdığına gore / 18 numaralı rol id /////19 numaralı rol id/////21 numaralı rol id//22 numaralı rol id////23 numaralı rol id////

case "21":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_21)
await menu.clicker.member.roles.remove(["873333811029610527" , "873206086847565824", "873334541006282783","873334751530987590", "873335030875844618"])
        break;// üstte yazdığına gore / 18 numaralı rol id /////19 numaralı rol id/////20 numaralı rol id//22 numaralı rol id////23 numaralı rol id////

case "22":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_22)
await menu.clicker.member.roles.remove(["873333811029610527" , "873206086847565824", "873334541006282783", "873334698254938112","873335030875844618"])
        break;// üstte yazdığına gore / 18 numaralı rol id /////19 numaralı rol id/////20 numaralı rol id//21 numaralı rol id////23 numaralı rol id////

case "23":
          menu.reply.send("Rollerin düzenlendi!", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_23)
await menu.clicker.member.roles.remove(["873333811029610527" , "873206086847565824", "873334541006282783", "873334698254938112", "873334751530987590"])
        break;// üstte yazdığına gore / 18 numaralı rol id /////19 numaralı rol id/////20 numaralı rol id//21 numaralı rol id////22 numaralı rol id////

case "24":
          menu.reply.send("Rollerin düzenlendi!", true)
await menu.clicker.member.roles.remove(["873333811029610527", "873206086847565824", "873334541006282783", "873334698254938112", "873334751530987590", "873335030875844618"])
        break;// üstte yazdığına gore / 18 numaralı rol id /////19 numaralı rol id/////20 numaralı rol id//21 numaralı rol id////22 numaralı rol id//23 numaralı rol id//
      default:
          
        break;
  }
}

});
/////////////////////////////////////Renk Seçim////////////////////////////////


client.login(client.settings.token)
  .then(() => console.log("\x1b[34m%s\x1b[1m", "[ Bot ] Discord API verified bot's token!"))
  .catch(err => console.error("\x1b[31m%s\x1b[0m", "[ Bot ] Discord API can't verified bot's token!"))

client.on("ready", () => {
    client.channels.cache.get("SES KANALI İDSİ GİRİN!").join();
  });
