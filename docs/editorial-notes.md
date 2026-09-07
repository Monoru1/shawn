# Shawn — notes éditoriales et sources

## Direction retenue après retour client

Shawn et ses œuvres ouvrent le site. L'accueil présente une photographie et un film nommés, avec un accès de même niveau aux deux pratiques. Les pages sont claires, les images conservent leur cadre, les légendes sont visibles sans survol. Kerawa est présenté comme le studio fondé par Shawn.

Références étudiées, sans reprise de leurs mises en page :
- https://www.nadineijewere.co.uk/ : discrétion de l'interface, place de la photographie.
- https://acreativepartner.co/artist/daniel-obasi/ : projets nommés, distinction claire photographie / réalisation.
- https://www.quentindebrieystudio.com/photography : possibilité de parcourir rapidement un index.

## Sources des œuvres

Profil consulté : https://www.instagram.com/shawnpicture__/
Le profil public confirme son nom, ses deux pratiques et son rôle de fondateur. L'ouverture des publications est limitée aux visiteurs connectés. Les légendes et fichiers utilisés ont donc été recoupés avec ses propres publications publiques relayées par Kerawa : https://bj.linkedin.com/showcase/kerawa-space/

| Fichiers | Œuvre et contexte vérifiés |
| --- | --- |
| kidjo-1, kidjo-2 | Portrait of a Genius, Femi & Sica Kidjo ; rues d'Akpakpa, Cotonou, 2026. Le second portrait n'identifie pas individuellement la sœur. |
| donli-1, donli-2 | Portrait of a Genius, Lady Donli ; résidence musicale à Cotonou, 2026. Grand-Popo est le lieu d'une rencontre antérieure, pas celui de ces images. |
| mathias-1 | Portrait de Mathias ; Adjarra, Ouémé, Bénin, 2025. |
| enchantresse-1 | Œuvre de la série Enchantresse, exposée au festival Lopo Lopo à Grand-Popo, résidence Finding Etherea. Lieu de prise de vue et année non attribués faute de confirmation. La marge du tirage est conservée. |
| between | Affiche du film Between Land and Ocean ; tournage à Gbècon, Bénin, 2025. Réalisation et image Shawn N. Hounkpatin ; production Kerawa Studio. |

Les URLs de téléchargement exactes sont conservées dans `public/media/works/sources.json`. Les fichiers sont hébergés avec le site : aucune dépendance à une URL sociale temporaire pour l'accueil et la galerie.

Biographie : https://www.54journal.com/stories/shawn-hounkpatin
Le lien de My Lover a été corrigé d'après le lien publié par Shawn : https://lnkd.in/exYFf5-e → https://youtu.be/e5d2Bag4pCI
Les galeries des deux films mélangeaient des images dont l'appartenance aux films n'était pas établie. Elles ont été retirées ; les lecteurs, crédits et routes sont conservés.

## Médias et typographie

Le dernier retour client demande ses œuvres réelles : elles remplacent les placeholders Unsplash. Les exports publics de photographie mesurent 800 px de large. Trois variantes WebP 400 / 600 / 800 px sont livrées, sans agrandissement artificiel. Les masters 1600 / 2400 px restent à fournir par Shawn pour les écrans à forte densité. Les dimensions HTML sont explicites ; les cadres utilisent object-fit: contain ; les images hors premier écran sont chargées paresseusement.

L'accueil emploie Archivo pour l'interface et Georgia, disponible localement, pour le nom et la biographie. DM Mono reste utilisé pour les métadonnées ; Fraunces reste chargé pour les pages existantes. Archivo, DM Mono et Fraunces sont chargés via Google Fonts dans index.html, avec display=swap.

Contact demandé : shawn@kerawastudio.com. L'adresse est un lien mailto ; la livraison ne configure pas de boîte mail.

## Trois décisions

1. Remplacer la grande signature décorative par des œuvres dès le premier écran : le visiteur découvre le travail de Shawn immédiatement.
2. Donner aux légendes les sujets, lieux et contextes confirmés : les images forment un portfolio identifiable, sans géographie inventée.
3. Conserver des cadres entiers, une grille asymétrique et un index compact : chaque œuvre garde sa composition, avec deux rythmes de consultation et une visionneuse accessible.
