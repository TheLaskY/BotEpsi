exports.run = async (client, message, args) =>{
  message.channel.send('@here\n\n\nHello!\n\nJe sui le bot de l\'EPSI, codé en **JavaScript** sous le module DiscordJS qui tourne sous NodeJS.\n\nMes fonctionnalités ne sont pas encore très variées mais je peut effectuer:\n\n\n    **Un Ping** pour savoir si je suis online\n\n    De la musique avec les commandes suivantes:\n  !play {nom de la musique}\nil vous suffit d\'entrer le nom de la musique puis de sélectionner parmis ma query Youtube la musique souhaité (only audio)\n\n**Ne pas oublier de se connecter dans un channel vocal avant d\'invoquer le bot!**\n\nPlusieures musiques peuvent etres ajoutées a la file d\'attente, pour la check: !queue\n\nPour mettre en pause et rejouer la musique: !pause et !resume\n un système de skip est disponible en fonction du nombre de personnes présentes dans le channel: !skip pour voter la prochaine musique')


}