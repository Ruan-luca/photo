app.factory('PostFactory', function(){
    var factory = {
      posts:[
        {
          "id": 1,
          "image": "img/AppareilPhoto.jpg",
          "title": "Photographie",
          "content": "La photographie est l’art de créer au moyen d’un appareil photographique des images dotées d’un impact émotionnel ou esthétique.",
          "comments": [
            {
              "content": "La photographie est l’art de créer au moyen d’un appareil photographique des images dotées d’un impact émotionnel ou esthétique.",
              "content1": "Comme tout artiste, le photographe définit d’abord son sujet, qu’il traite ensuite à l’aide d’une grande variété de procédés. Après le choix de l’appareil photographique, de nombreux éléments, comme la qualité de la lumière, entrent en jeu. Le cadrage, ou la manière de délimiter les contours de la scène photographiée, fait aussi partie de la démarche artistique. Des paramètres techniques tels que la sensibilité de la pellicule employée, la vitesse du déclenchement de la prise de vue et la précision des objectifs façonnent les caractéristiques de l’image.",
              "content2": "Une fois la photographie prise, le développement permet à nouveau de multiples interventions sur le résultat. Enfin, les dimensions données au tirage sur papier (ou parfois sur un autre support) achèvent de définir la particularité de l’œuvre.",
              "content3": "Source: Microsoft Encarta 2009 ",
            
            }
          ]
        },
        {
          "id": 2,
          "image": "img/Camera1.webp",
          "title": "Montage Vidéo",
          "content": "Le montage vidéo consiste à sélectionner des séquences d'images pré-enregistrées en vidéo et à les assembler en une suite cohérente ou d'expression artistique.",
          "comments": [
            {
              "content": "Le montage vidéo consiste à sélectionner des séquences d'images pré-enregistrées en vidéo et à les assembler en une suite cohérente ou d'expression artistique.",
              "content1": "Le montage vidéo consiste à couper une longue vidéo de sorte à ce qu'elle ne dure plus que quelques seconde afin de l'utiliser à but humoristique l'une des étapes de post-production pour la réalisation de documentaires, téléfilms, reportages, clips vidéo, films d'animation, etc. Le support exploité peut être la bande magnétique, le disque dur ou magnéto-optique.",
              "content2": "Exploité par les professionnels pour le cinématographe depuis ses origines, tant pour les effets spéciaux que pour formuler une ellipse dans un récit, le montage est à la portée du public depuis l'avènement du film amateur. Son essor grand public s'est intensifié avec les progrès de la micro-informatique à partir des années 1990, notamment grâce aux logiciels dédiés et aux caméscopes numérique permettant de créer et monter, films de famille ou fictions personnelles.",
              "content3": "Source: Wikipedia"
            }
          ]
        },
        {
          "id": 3,
          "image": "img/Camera2.webp",
          "title": "Couverture Evenementielle",
          "content": "Un évènement est un fait important",
          "comments": [
            {
              "content": "Un évènement est un fait important",
              "content1": "Valoriser la communication de son évènement, sa marque ou de son entreprise par des photos, vidéos et publications de qualité est une démarche à ne pas négliger.",
              "content2": "En effet la première perception que l'on a d'une publicité, d’un évènement, d’une marque ou d'un site internet, est l'image que l'on en voit. Ce premier contact détermine le reste de la lecture de votre communication.",
              "content3": "vous souhaité une couverture evenementielle,"
            }
          ]
        }

      ],
      getPosts: function(){
         return factory.posts;
      },
      getPost: function(id){
        var post = {}
        angular.forEach(factory.posts, function(value, key){
          if(value.id == id){
            post = value
          }
        });
        return post;
      },

    }
    return factory;

  })