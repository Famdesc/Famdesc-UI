---
title: "Guide pour Contribuer avec des Pull Requests dans Famdesc"
description: "Apprenez à créer des Pull Requests efficaces et alignées avec nos pratiques de développement chez Famdesc."
author: "Nardis"
role: "Fondateur & Développeur, Famdesc"
authorImage: "@/images/blog/nardis.avif"
authorImageAlt: "Photo de l'auteur Nardis"
pubDate: 2024-08-09
cardImage: "@/images/blog/post-2.avif"
cardImageAlt: "Bannière des pull requests dans Famdesc"
readTime: 6
tags: ["Git", "Open Source", "Collaboration", "Pull Requests"]
contents: [""]
---

Une **Pull Request (PR)** est une demande de fusion de modifications de code depuis une branche (généralement une branche de fonctionnalité ou de correction de bugs) dans le référentiel principal du projet. Chez **Famdesc**, les Pull Requests (PRs) sont une partie essentielle du flux de travail de développement. Elles sont le moyen par lequel les modifications proposées dans le code sont révisées, discutées et finalement intégrées dans la base de code principale. Pour s'assurer que nos PRs soient claires, efficaces et faciles à réviser, nous suivons un format spécifique et des meilleures pratiques.

#### Avantages des Pull Requests

- **Collaboration et Transparence:** Les PRs favorisent la collaboration entre les membres de l'équipe, permettant à plusieurs développeurs de réviser et de commenter les modifications proposées. Cela améliore non seulement la qualité du code, mais aussi la transparence dans le processus de développement.
- **Détection Précoce des Erreurs:** Grâce au processus de révision, il est plus probable de détecter des erreurs, des incohérences ou des problèmes de conception avant que le code ne soit fusionné dans la branche principale, réduisant ainsi le risque d'introduire des bugs en production.
- **Documentation du Processus de Développement:** Chaque PR agit comme une pièce de documentation qui enregistre le raisonnement derrière les modifications, les discussions qui ont eu lieu, et les décisions prises. Cela est utile pour référence future et pour les nouveaux membres de l'équipe.
- **Contrôle de Qualité:** Permettre à d'autres développeurs de réviser le code garantit que les normes de qualité sont respectées et que le code respecte les lignes directrices et les conventions du projet.

#### Meilleures Pratiques pour Créer des Pull Requests

- **Modifications Petites et Ciblées:** Il est recommandé que chaque PR aborde un seul sujet ou problème. Cela facilite la révision et la compréhension des modifications.
- **Description Claire et Concise:** Fournir une description détaillée de l'objectif de la PR, y compris quel problème elle résout et comment elle le résout. Le cas échéant, inclure des références aux tickets de problème ou aux spécifications.
- **Tests Inclus:** S'assurer que toute modification du code est accompagnée des tests correspondants. Cela aide à valider que le code fonctionne comme prévu et n'introduit pas d'erreurs.
- **Demander des Révisions Spécifiques:** Taguer les membres de l'équipe ayant les connaissances pertinentes pour réviser la PR, garantissant une révision plus efficace et rapide.

#### Processus de Révision des Pull Requests

1. **Révision du Code:** Réviser le code ligne par ligne, en s'assurant qu'il respecte les normes de codage du projet et qu'il n'introduit pas d'erreurs ou de vulnérabilités```markdown
2. **Tests et Validation:** Exécuter tous les tests associés pour s'assurer que les modifications n'altèrent pas la fonctionnalité existante.
3. **Discussion et Feedback:** Commenter sur les améliorations possibles, demander des modifications si nécessaire, et discuter des alternatives avec l'auteur de la PR.
4. **Approbation et Fusion:** Une fois que la PR a été approuvée par les réviseurs requis et que tous les tests ont été validés, elle peut être fusionnée dans la branche principale du projet.

#### Automatisation dans les Pull Requests

Des outils comme CI/CD peuvent être intégrés au flux de travail des PRs pour automatiser l'exécution des tests, l'analyse de code et d'autres vérifications avant la fusion. Cela aide à garantir que seul le code de haute qualité parvienne à la branche principale.

### Modèle pour Pull Requests

Utiliser le bon modèle assure que les modifications proposées sont présentées de manière claire et organisée. Chaque PR doit suivre cette structure :

```markdown
## General Description

[Brève description des modifications proposées, fournissant le contexte et l'objectif général de la PR.]

## Change Details

- **[Zone spécifique]:** [Description détaillée de la modification effectuée.]
- **[Autre zone spécifique]:** [Description détaillée d'une autre modification effectuée.]

## Motivation and Context

[Explication de la raison pour laquelle les modifications ont été apportées, en détaillant la motivation derrière elles et comment elles affectent le projet.]

## Instructions for Testing

1. [Première étape pour tester les modifications.]
2. [Deuxième étape pour tester les modifications.]
3. [Toutes autres étapes nécessaires.]

## Additional Notes

[Toutes informations supplémentaires pouvant être utiles pour les réviseurs, comme des avertissements, des limitations, ou des détails techniques pertinents.]

## Related Issues

- [#Numéro du problème connexe (si applicable).]

## Screenshots

[Inclure des captures d'écran des modifications si applicables, en particulier pour les modifications de l'interface utilisateur.]
```

**Exemple** :

#### General Description

Cette pull request ajoute la prise en charge de la traduction en espagnol de la page "Contactez-nous" sur la plateforme Famdesc. Cette mise à jour inclut du contenu traduit pour tous les éléments de texte, garantissant une expérience utilisateur cohérente pour les utilisateurs hispanophones.

#### Change Details

- **Titre et Sous-titres** : Le titre principal et les sous-titres de la page de contact ont été traduits en espagnol.
- **Étiquettes du Formulaire** : Les étiquettes des champs du formulaire (par exemple, prénom, nom, détails) ont été mises à jour en espagnol.
- **ContactIconBlocks** : Les en-têtes et le contenu pour les diverses options de contact, y compris la Base de Connaissances, la FAQ, la visite au bureau et le contact par email, ont été traduits.

#### Motivation and Context

Cette mise à jour améliore l'accessibilité et l'utilisabilité de la plateforme Famdesc pour les utilisateurs hispanophones. Elle s'aligne avec notre engagement à offrir une expérience localisée qui répond à une audience diversifiée.

#### Instructions for Testing

1. Accédez à la page "Contactez-nous" avec la langue du site configurée en espagnol.
2. Vérifiez que tous les éléments de texte s'affichent en espagnol.
3. Assurez-vous que les champs du formulaire et les ContactIconBlocks sont correctement traduits et maintiennent la cohérence dans la conception et la mise en page.
4. Testez la soumission du formulaire pour garantir qu'aucune fonctionnalité n'est affectée par la traduction.

#### Additional Notes

- Revoyez les traductions pour garantir leur exactitude et leur adéquation dans le contexte de la plateforme.
- Vérifiez toute divergence visuelle ou problème qui pourrait avoir surgi en raison des changements de longueur du texte traduit.

#### Related Issues

- N/A

#### Screenshots

![Page "Contactez-nous" avec traductions en espagnol](https://raw.githubusercontent.com/nardis9501/Famdesc-images/main/blog/contact-screenshot.avif)

### Conclusion

L'utilisation efficace des Pull Requests est une pratique clé dans le développement collaboratif, aidant à maintenir la qualité du code, à faciliter la communication entre les développeurs, et à assurer que le projet progresse de manière cohérente et bien documentée.
