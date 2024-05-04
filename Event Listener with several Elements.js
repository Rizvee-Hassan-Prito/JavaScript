
var length=document.querySelectorAll(".buttons").length

for(i=0;i<length;i++)
{
    document.querySelectorAll(".buttons")[i].addEventListener("click",function(){
        var ev= this.innerHTML; 
        document.querySelector("h1").innerHTML= "Information of " +ev;
        if (ev=='Ellie William') 
        {
            document.querySelector("p").innerHTML= "Ellie Williams was born in the spring of 2019, by which time the Cordyceps brain infection had spread throughout the United States. Her mother was a nurse named Anna, although the identity of her father is unknown. On the day of her birth, her mother passed away. Before her death, Anna entrusted her closest friend Marlene to look after Ellie. However, Ellie did not meet Marlene until she was 13 years old. As a child, Ellie grew up as an orphan in an oppressive military quarantine zone in Boston, Massachusetts, with little knowledge of the world before infection. According to Ellie, at one point in her life, she drove a car, and used a BB rifle to shoot at rats.";
        }
        else if (ev=='Ezio Auditore') 
        {
            document.querySelector("p").innerHTML= "Ezio Auditore da Firenze (Italian pronunciation: [ˈɛttsjo audiˈtoːre da (f)fiˈrɛntse]) is a character in the video game series Assassin's Creed, an Italian Master Assassin who serves as the protagonist of the series' games set during the Italian Renaissance. His life and career as an Assassin are chronicled in Assassin's Creed II, II: Discovery (both 2009), Brotherhood (2010), and Revelations (2011), as well as the short films Assassin's Creed: Lineage (2009), Ascendance (2010), and Embers (2011) and various spin-off media of the franchise."
        }
        else
        {
            document.querySelector("p").innerHTML= "Ratonhnhaké:ton (IPA: [radũnhaɡɛ̌ːdõ]), commonly known by his adopted name Connor,[a] is a fictional character in the video game series Assassin's Creed. A half-British, half-Mohawk Master Assassin who serves as a central character in the games set around the American Revolution, he first appears as the main protagonist of Assassin's Creed III (2012), in which he is portrayed by Native American actor Noah Watts through performance capture, and voiced by Jamie Mayers as a young child.";
        }

    }
    )
}
