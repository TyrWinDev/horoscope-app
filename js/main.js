document.getElementById('horoscopeButton').addEventListener('click', choosePokemon, hideStuff)
const pic = document.getElementById('pokePic');
const description = document.getElementById('pokeDescription');
const tryAgain = document.getElementById('tryAgainButton').addEventListener('click', reload);



function choosePokemon() {

    let month = document.getElementById('month').value;
    console.log(month);
    let day = document.getElementById('day').value;
    console.log(day);



    //Conditionals to print the correct result according to the value provided by the user

    if(month == 'December' && day >= 22 || month == 'January' && day <= 19) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Vaporeon! (Capricorn)'

        pic.innerHTML = '<img src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Vaporeon.png?q=50&fit=crop&w=740&h=416&dpr=1.5" alt="">'

        description.innerHTML = `<em>As an earth sign, Capricorns represent discipline, self-control, and tradition. Visually, Vaporeon and Capricorn share a fishtail with the latter taking inspiration from mermaids while the 10th zodiac sign resembles the mythical sea-goat.
         <br>
        Vaporeon shares a great deal of responsibility due to being able to tell when it will rain when its tail vibrates. Capricorns use their responsible-like intuition to work hard and pursue their goals for those they care deeply about.</em>`
    } else if (month == 'January' && day >= 20 || month == 'February' && day <= 18) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Dragonite! (Aquarius)'

        pic.innerHTML = '<img src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Dragonite.png?q=50&fit=crop&w=737&h=414&dpr=1.5" alt="">'

        description.innerHTML = `<em>Dragonite are mystical and destined for greater things in life. Representing the water bearer sign Aquarius, they are open-minded, free-spirited, and have humanitarian-like qualities that strive them to help others out. If you watched the first Pokémon movie, you may have noticed a Dragonite being a mail deliverer, adding to their humanitarian and humble nature. Sometimes their unpredictability and impulsiveness can get the best of them, but Aquarius always have their hearts in the right place.</em>`
    } else if (month == 'February' && day >= 19 || month == 'March' && day <= 20) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Magikarp! (Pisces)'

        pic.innerHTML = '<img src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/07/magikarp.jpg?q=50&fit=crop&w=737&h=417&dpr=1.5" alt="">'

        description.innerHTML = `<em>With Pisces being the fish sign, what other Pokémon would fit perfectly than Magikarp? With the ruling planet being Neptune, its association with water gives a reason to put the Pokémon and zodiac sign together. The Fish Pokémon may have been called out in-game and in the real world for many negative qualities like being weak, Magikarp have a lot of great hidden potential that will emerge later on life once they evolve into Gyarados.</em>`
    } else if (month == 'March' && day >= 21 || month == 'April' && day <= 19) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Charmander! (Aries)'

        pic.innerHTML = '<img src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/07/pokemon-charmander-1.jpg?q=50&fit=crop&w=737&h=368&dpr=1.5" alt="">'

        description.innerHTML = `<em>People born under the Aries sign are hotheaded and ready for anything, just like the adorable but confident Charmander. They are incredibly determined in their goals and are more likely to act before think.
        <br>
        The ram sign can also be impatient and impulsive, which associates with a Charmander perfectly due to their typing. With newfound energy and focus, Aries can accomplish what they set out for and will take on any challenge, even if it seems impossible at first.</em>`
    } else if (month == 'April' && day >= 20 || month == 'May' && day <= 20) {

        hideStuff();
        
        document.getElementById('pokeResult').innerHTML = 'You are Tauros! (Taurus)'

        pic.innerHTML = '<img src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Tauros.png?q=50&fit=crop&w=737&h=414&dpr=1.5" alt="">'

        description.innerHTML = `<em>Stubbornness, responsibility, and devotion are some of the recognizable traits for the earth sign Taurus. With the name Tauros literally taking inspiration from the zodiac sign and being known as the Bull Pokémon, that combination is a match made in heaven.
        <br>
        Tauruses are willing to endure any consequences until they are happy and with dedication being their defining characteristic, their loyalty is something to be respected. Like a regular bull, Tauros are not to be messed with when angry.</em>`
    } else if(month == 'May' && day >= 21 || month == 'June' && day <= 21) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Ditto! (Gemini)'

        pic.innerHTML = '<img src="https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/07/ditto.jpg?q=50&fit=crop&w=737&h=491&dpr=1.5" alt="">'

        description.innerHTML = `<em>Geminis are adaptable and quick to learn, but can also be very indecisive at times. Ditto's ability to transform into any Pokémon and Gemini being the twin symbol, this is another perfect combo for these two.
        <br>
        Alongside being two-faced as one of its negative traits, Ditto can be mischievous at best or worst. A Gemini also has the capability of being very open-minded, which allows them to see both sides without having a bias.</em>`
    } else if (month == 'June' && day >= 22 || month == 'July' && day <= 22) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Krabby! (Cancer)'

        pic.innerHTML = '<img src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/07/krabby.png?q=50&fit=crop&w=737&h=553&dpr=1.5" alt="">'

        description.innerHTML = `<em>The Cancer sign and Krabby go hand in hand. Despite not always looking like it, Cancers are influenced by their emotions and intuition. Similarly to their Pokémon counterparts, are prone to be defensive if threatened, which makes the phrase "retreating into their shells" parallel to our world's crabs. They are challenging to get to know and can appear prickly at first, but once you get to know them, Cancers are the precious gems of this world.</em>`
    } else if (month == 'July' && day >= 23 || month == 'August' & day <= 22) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Arcanine! (Leo)'

        pic.innerHTML = '<img src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Arcanine.png?q=50&fit=crop&w=737&h=553&dpr=1.5" alt="">'

        description.innerHTML = `<em>Dogs and lions are not exactly in the same category mammals-wise, but the Leo sign and Arcanine do share some similar traits. They both value leadership, are energetic, bold, and self-confident.
        <br>
        Seeing as how Officer Jenny is seen with Arcanine and its pre-evolution Growlithe, they display bravery in facing against criminals and other heroic duties. The downsides both Leos and Arcanine have as characteristics include exceeding pridefulness.  Other than that, Leos and Arcanine go well together due to being attributed to fire.</em>`
    } else if (month == 'August' && day >= 23 || month == 'September' && day <= 22) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Chansey! (Virgo)'

        pic.innerHTML = '<img src="https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Chansey.png?q=50&fit=crop&w=737&h=414&dpr=1.5" alt="">'

        description.innerHTML = `<em>Virgos are extremely kindhearted people and are dedicated to their work. They will not rest until they make achievements. A Chansey is known for her role as Nurse Joy's assistant in the Pokémon Center and displays calm, empathetic, and affectionate qualities, which works out well for her.
        <br>
        Both Virgos and Chansey are willing to share their generosity and help those in need, but when bothered, they can be critical of others and themselves.</em>`
    } else if (month == 'September' && day >= 23 || month == 'October' && day <= 23) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Alakazam! (Libra)'

        pic.innerHTML = '<img src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Alakazam.png?q=50&fit=crop&w=737&h=414&dpr=1.5" alt="">'

        description.innerHTML = `<em>Libras are diplomatic, have a strong sense of justice, and are understanding at heart. For the scales sign, Alakazam is one that values order and balance for themself and for everyone. In the wild, Alakazam and its pre-evolutions are found in urban areas, mirroring a Libra's trait as being sociable around other people. At times Libras can be indecisive and flighty, but they will put others before themselves and show incredible loyalty.</em>`
    } else if (month == 'October' && day >= 24 || month == 'November' && day <= 21) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Tentacruel! (Scorpio)'

        pic.innerHTML = '<img src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Tentacruel.png?q=50&fit=crop&w=737&h=553&dpr=1.5" alt="">'

        description.innerHTML = `<em>Scorpios can be either someone you really admire or someone you want to stay far away from. Fitting the poison type, Tentacruel can be vicious, controlling, and secretive. But when they are owned by trainers, they can be resourceful, focused, and ambitious. Since many Tentacool and Tentacruel tend to stick by in groups, it adds to their intense loyalty to their families.</em>`
    } else if (month == 'November' && day >= 22 || month == 'December' && day <= 21) {

        hideStuff();

        document.getElementById('pokeResult').innerHTML = 'You are Rapidash! (Sagittarius)'

        pic.innerHTML = '<img src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Tentacruel.png?q=50&fit=crop&w=737&h=553&dpr=1.5" alt="">'

        description.innerHTML = `<em>Rapidash, like horses in our world, are energetic and wild, but spirited and a natural-born leader. Sagittariuses share these character traits with Rapidash and it fits so well given their common element.
        <br>
        They both share a love for exploration and travel, and if that does not parallel each other in the slightest, we don't know what else does. To be in touch with the world, they must travel across the land to get the best out of experiencing an exhilarating adventure.</em>`
    }
}

function hideStuff() {
    document.getElementById('month').style.display='none';
    document.getElementById('day').style.display='none';
    document.getElementById('horoscopeButton').style.display='none';
    document.getElementById('tryAgainButton').classList.toggle('hidden');
    document.querySelector('h2').style.display='none';
}


function reload() {
    window.location.href=window.location.href;
}