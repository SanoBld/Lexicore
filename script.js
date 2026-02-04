/* --- DICTIONNAIRE ÉTENDU (Noms communs courants) --- */
const dictionary = [
    "ABAQUE", "ABBAYE", "ABEILLE", "ABIME", "ABRI", "ABSENCE", "ABSOLU", "ACCENT", "ACCES", "ACCORD", "ACCROC", "ACCUEIL", "ACIER", "ACTE", "ACTEUR", "ACTION", "ADIEU", "ADJOINT", "ADRESSE", "ADULTE", "AFFAIRE", "AFFICHE", "AGE", "AGENCE", "AGENDA", "AGENT", "AGNEAU", "AGRAFE", "AIDE", "AIGLE", "AIGUILLE", "AILE", "AIL", "AIMANT", "AIR", "AIRE", "AISANCE", "AJOUT", "ALARME", "ALBUM", "ALCOOL", "ALENE", "ALGUE", "ALIBI", "ALIMENT", "ALLEE", "ALLIANCE", "ALLURE", "ALPAGE", "ALPES", "ALPHABET", "ALTITUDE", "AMANDE", "AMANT", "AMAS", "AMBASSADE", "AMBIANCE", "AMBITION", "AME", "AMI", "AMOUR", "AMPOULE", "AMUSEMENT", "ANALYSE", "ANANAS", "ANCHE", "ANCIEN", "ANE", "ANGE", "ANGLE", "ANGOISSE", "ANIMAL", "ANNEAU", "ANNEE", "ANNONCE", "ANOMALIE", "ANTENNE", "ANTIQUE", "APERITIF", "APOGEE", "APPAREIL", "APPEL", "APPETIT", "APPLAUDIR", "APPUI", "AQUARIUM", "ARBRE", "ARC", "ARCHE", "ARCHIVE", "ARDENT", "ARENE", "ARGENT", "ARGILE", "ARGUMENT", "ARME", "ARMEE", "ARMOIRE", "AROME", "ARRET", "ARRIVEE", "ART", "ARTERE", "ARTICLE", "ARTISTE", "ASCENSEUR", "ASILE", "ASPECT", "ASPHALTE", "ASSIETTE", "ASSURE", "ASTRE", "ATELIER", "ATHLETE", "ATOME", "ATOUT", "ATTACHE", "ATTAQUE", "ATTENTE", "ATTITUDE", "AUBE", "AUBERGE", "AUDACE", "AUDIENCE", "AUDIT", "AURORE", "AUTEL", "AUTEUR", "AUTOMNE", "AVANCE", "AVANT", "AVARE", "AVENIR", "AVENTURE", "AVERS", "AVEU", "AVION", "AVIRON", "AVIS", "AVOCAT", "AVOIR", "AVRIL", "AXE", "AZUR",
    "BABINE", "BAC", "BACTERIE", "BADGE", "BAGAGE", "BAGARRE", "BAGUE", "BAGUETTE", "BAIE", "BAIGNADE", "BAIN", "BAISER", "BAISSE", "BAL", "BALADE", "BALAI", "BALANCE", "BALCON", "BALEINE", "BALISE", "BALLE", "BALLET", "BALLON", "BAMBOU", "BANANE", "BANC", "BANDAGE", "BANDE", "BANDIT", "BANJO", "BANQUE", "BANQUET", "BAPTEME", "BAR", "BARBE", "BARQUE", "BARRAGE", "BARRE", "BARRIERE", "BAS", "BASE", "BASSIN", "BATAILLE", "BATEAU", "BATIMENT", "BATON", "BATTERIE", "BAVARD", "BAZAR", "BEAUTE", "BEBE", "BEC", "BELIER", "BELLE", "BENEFICE", "BERCEAU", "BESOIN", "BETON", "BEURRE", "BIAIS", "BIBERON", "BIBLE", "BICYCLETTE", "BIDON", "BIEN", "BIERE", "BIJOU", "BIKINI", "BILAN", "BILLET", "BINOME", "BIO", "BISCUIT", "BISON", "BISOU", "BLAGUE", "BLANC", "BLE", "BLESSE", "BLEU", "BLINDAGE", "BLOC", "BLOCUS", "BLOUSE", "BLUFF", "BOBINE", "BOCAL", "BOEUF", "BOIRE", "BOIS", "BOISSON", "BOITE", "BOL", "BOMBE", "BONBON", "BOND", "BONHEUR", "BONJOUR", "BONNET", "BORD", "BORDEL", "BORNE", "BOSSE", "BOTTE", "BOUCHE", "BOUCHON", "BOUCLE", "BOUCLIER", "BOUE", "BOUFFEE", "BOUGIE", "BOUILLON", "BOULANGER", "BOULE", "BOULET", "BOULEVARD", "BOULON", "BOULOT", "BOUQUET", "BOURG", "BOURSE", "BOUSSOLE", "BOUT", "BOUTEILLE", "BOUTIQUE", "BOUTON", "BOXE", "BRACELET", "BRAISE", "BRANCHE", "BRAS", "BRASIER", "BRAVO", "BREBIS", "BRECHE", "BREVET", "BRICOLAGE", "BRIDE", "BRIQUE", "BRIQUET", "BRISE", "BROCHE", "BRONZE", "BROSSE", "BROUILLE", "BROUILLARD", "BRUIT", "BRULURE", "BRUME", "BRUT", "BUCHE", "BUDGET", "BUFFET", "BULLE", "BULLETIN", "BUREAU", "BURGER", "BUS", "BUSTE", "BUT", "BUTIN",
    "CABANE", "CABINET", "CABLE", "CACAO", "CACHET", "CADEAU", "CADENAS", "CADET", "CADRE", "CAFE", "CAGE", "CAGOULE", "CAHIER", "CAILLOU", "CAISSE", "CALCUL", "CALENDRIER", "CALIN", "CALME", "CAMERA", "CAMION", "CAMP", "CAMPAGNE", "CANAL", "CANAPE", "CANARD", "CANDIDAT", "CANNE", "CANON", "CANOT", "CANTINE", "CAP", "CAPABLE", "CAPACITE", "CAPITAL", "CAPOT", "CAPRICE", "CAPSULE", "CAPTEUR", "CAPUCHE", "CAR", "CARACTERE", "CARAFE", "CARBONE", "CARCASSE", "CARGO", "CARNAVAL", "CARNET", "CAROTTE", "CARRE", "CARREAU", "CARRIERE", "CARTE", "CARTON", "CAS", "CASCADE", "CASIER", "CASINO", "CASQUE", "CASQUETTE", "CASSE", "CASTOR", "CATASTROPHE", "CAUCHEMAR", "CAUSE", "CAVALIER", "CAVE", "CAVIAR", "CEINTURE", "CELIBAT", "CELLULE", "CENDRE", "CENDRIER", "CENT", "CENTIME", "CENTRE", "CERCLE", "CEREALE", "CERISE", "CERNE", "CERVEAU", "CERF", "CERTITUDE", "CESSE", "CHAGRIN", "CHAINE", "CHAIR", "CHAISE", "CHALEUR", "CHAMBRE", "CHAMEAU", "CHAMP", "CHAMPAGNE", "CHAMPION", "CHANCE", "CHANDELLE", "CHANGE", "CHANSON", "CHANT", "CHANTIER", "CHAOS", "CHAPEAU", "CHAPELLE", "CHAPITRE", "CHARBON", "CHARGE", "CHARIOT", "CHARME", "CHARPENTE", "CHARRUE", "CHASSE", "CHAT", "CHATEAU", "CHAUD", "CHAUFFAGE", "CHAUSSON", "CHAUSSURE", "CHAUVE", "CHEF", "CHEMIN", "CHEMISE", "CHENE", "CHENILLE", "CHEQUE", "CHER", "CHEVAL", "CHEVALIER", "CHEVEU", "CHEVILLE", "CHEVRE", "CHIEN", "CHIFFRE", "CHIMIE", "CHIMISTE", "CHIPS", "CHIRURGIE", "CHLORURE", "CHOC", "CHOCOLAT", "CHOIX", "CHOMAGE", "CHORALE", "CHOSE", "CHOU", "CHUTE", "CIBLE", "CICATRICE", "CIEL", "CIERGE", "CIGARE", "CIGOGNE", "CIL", "CIME", "CIMENT", "CIMETIERE", "CINEMA", "CINQ", "CIRCUIT", "CIRQUE", "CITERNE", "CITOYEN", "CITRON", "CIVIL", "CLAIR", "CLAMEUR", "CLAN", "CLASSE", "CLAVIER", "CLE", "CLIENT", "CLIMAT", "CLINIQUE", "CLOCHE", "CLOISON", "CLOTURE", "CLOU", "CLOWN", "CLUB", "COACH", "COBRA", "COCCINELLE", "COCKTAIL", "COCON", "COCOTIER", "CODE", "COEUR", "COFFRE", "COGNAC", "COIN", "COL", "COLERE", "COLIS", "COLLIER", "COLLINE", "COLONIE", "COLONNE", "COLORIS", "COMBAT", "COMEDIE", "COMETE", "COMITE", "COMMANDANT", "COMMANDE", "COMMERCE", "COMMUNE", "COMPAGNIE", "COMPAS", "COMPLET", "COMPLEXE", "COMPTE", "COMTESSE", "CONCEPT", "CONCERT", "CONCOURS", "CONDITION", "CONDUCTEUR", "CONDUITE", "CONFETTI", "CONFIANCE", "CONFLIT", "CONFORT", "CONGE", "CONGRES", "CONSEIL", "CONSERVE", "CONSOLE", "CONTACT", "CONTE", "CONTRAT", "CONTRE", "CONTROLE", "CONVOI", "COPAIN", "COPEAU", "COPIE", "COQUE", "COQUILLE", "CORBEILLE", "CORDE", "CORDON", "CORNE", "CORPS", "CORRECT", "CORRIDOR", "CORTEGE", "COSMOS", "COSTUME", "COTE", "COTON", "COU", "COUCHE", "COUDE", "COULOIR", "COUP", "COUPABLE", "COUPE", "COUPLE", "COUPON", "COUPURE", "COUR", "COURAGE", "COURANT", "COURBE", "COUREUR", "COURONNE", "COURRIER", "COURSE", "COURT", "COUSIN", "COUSSIN", "COUTEAU", "COUTUME", "COUTURE", "COUVERCLE", "COUVERTURE", "CRABE", "CRAIE", "CRAINTE", "CRANE", "CRAPAUD", "CRATERE", "CRAVATE", "CRAYON", "CREATION", "CREATURE", "CREDIT", "CREDO", "CREME", "CREPE", "CRETE", "CREUSE", "CREUX", "CREVETTE", "CRI", "CRIQUE", "CRISE", "CRISTAL", "CRITIQUE", "CROCHET", "CROCODILE", "CROISSANCE", "CROIX", "CROUTE", "CROYANCE", "CRU", "CUBE", "CUEILLETTE", "CUILLERE", "CUIR", "CUISINE", "CUISSE", "CUIVRE", "CULOTTE", "CULTE", "CULTURE", "CUMUL", "CUPIDON", "CURIOSITE", "CUVETTE", "CYGNE", "CYLINDRE",
    "DANGER", "DANSE", "DARD", "DATE", "DAUPHIN", "DE", "DEBAT", "DEBIT", "DEBOUT", "DEBRIS", "DEBUT", "DECES", "DECHET", "DECISION", "DECLIC", "DECOR", "DECRET", "DEFAITE", "DEFAUT", "DEFENSE", "DEFI", "DEFILE", "DEFINITIF", "DEGAT", "DEGEL", "DEGRE", "DEHORS", "DELAI", "DELIT", "DELTA", "DEMANDE", "DEMARCHE", "DEMEURE", "DEMI", "DEMON", "DENT", "DENTELLE", "DENTISTE", "DEPART", "DEPENSE", "DEPOT", "DERIVE", "DESASTRE", "DESCENDRE", "DESERT", "DESESPOIR", "DESIGN", "DESIR", "DESORDRE", "DESSERT", "DESSIN", "DESTIN", "DETAIL", "DETENTE", "DETRESSE", "DETTE", "DEUIL", "DEUX", "DEVANT", "DEVELOPPEMENT", "DEVISE", "DEVOIR", "DIABLE", "DIAGNOSTIC", "DIAGRAMME", "DIALOGUE", "DIAMANT", "DICTEE", "DICTION", "DIEU", "DIFFERENCE", "DIGUE", "DILUANT", "DIMANCHE", "DINDE", "DINER", "DINOSAURE", "DIPLOME", "DIRE", "DIRECT", "DIRECTEUR", "DIRECTION", "DIRIGEANT", "DISCOURS", "DISCUSSION", "DISETTE", "DISQUE", "DISTANCE", "DISTILLERIE", "DISTRICT", "DIVAN", "DIVERS", "DIVIN", "DIVORCE", "DIX", "DOCILE", "DOCTEUR", "DOCUMENT", "DODO", "DOGME", "DOIGT", "DOLLAR", "DOMAINE", "DOMICILE", "DOMINO", "DOMMAGE", "DOMPTEUR", "DON", "DONJON", "DONNEE", "DORE", "DORTOIR", "DOS", "DOSAGE", "DOSSIER", "DOUBLE", "DOUCHE", "DOUCEUR", "DOULEUR", "DOUTE", "DOUX", "DOYEN", "DRAGON", "DRAME", "DRAP", "DRAPEAU", "DRESSAGE", "DROGUE", "DROIT", "DROITE", "DRONE", "DUEL", "DUNE", "DUO", "DUPE", "DUR", "DUREE", "DUVET", "DYNAMITE", "DYNASTIE",
    "EAU", "ECHANGE", "ECHANTILLON", "ECHARPE", "ECHEC", "ECHELLE", "ECHINE", "ECHO", "ECLAIR", "ECLAIRAGE", "ECLAT", "ECLIPSE", "ECLUSE", "ECOLE", "ECOLOGIE", "ECONOMIE", "ECORCE", "ECOSSE", "ECRAN", "ECRITURE", "ECRIVAIN", "ECROU", "ECUME", "ECUREUIL", "EDITEUR", "EDITION", "EDUCATION", "EFFET", "EFFICACE", "EFFORT", "EFFROI", "EGALITE", "EGARD", "EGLISE", "EGO", "ELAN", "ELASTIQUE", "ELECTION", "ELECTRICITE", "ELEPHANT", "ELEVAGE", "ELEVE", "ELITE", "ELOGE", "EMAIL", "EMBALLAGE", "EMBARRAS", "EMBLEME", "EMERAUDE", "EMEUTE", "EMIGRANT", "EMISSION", "EMOTION", "EMPEREUR", "EMPIRE", "EMPLOI", "EMPLOYE", "EMPREINTE", "ENCADREMENT", "ENCEINTE", "ENCHERES", "ENCLUME", "ENCLOS", "ENCRE", "ENDROIT", "ENDURANCE", "ENERGIE", "ENFANCE", "ENFANT", "ENFER", "ENJEU", "ENNEMI", "ENQUETE", "ENSEIGNE", "ENSEMBLE", "ENTENTE", "ENTREE", "ENTREPRISE", "ENTRETIEN", "ENVERS", "ENVIE", "ENVIRON", "ENVOI", "EPAISSEUR", "EPAULE", "EPAVE", "EPEE", "EPICE", "EPINARD", "EPINE", "EPINGLE", "EPISODE", "EPONGE", "EPOPEE", "EPOQUE", "EPOUSE", "EPOUX", "EPREUVE", "EQUATEUR", "EQUILIBRE", "EQUIPAGE", "EQUIPE", "ERABLE", "ERE", "ERREUR", "ERUPTION", "ESCADRON", "ESCALADE", "ESCALE", "ESCALIER", "ESCLAVE", "ESCOGRIFFE", "ESCRIME", "ESPACE", "ESPECE", "ESPERANCE", "ESPOIR", "ESPRIT", "ESSAI", "ESSENCE", "ESSUIE", "EST", "ESTOMAC", "ESTRADE", "ETABLE", "ETAGE", "ETAGERE", "ETAIN", "ETALON", "ETANG", "ETAPE", "ETAT", "ETE", "ETENDARD", "ETENDUE", "ETERNITE", "ETHIQUE", "ETINCELLE", "ETIQUETTE", "ETOILE", "ETONNEMENT", "ETOUPE", "ETRANGE", "ETRANGER", "ETRE", "ETREINTE", "ETUDE", "ETUDIANT", "EVIER", "EVOLUTION", "EXAMEN", "EXCELLENCE", "EXCEPTION", "EXCES", "EXCUSE", "EXEMPLE", "EXERCICE", "EXIL", "EXISTENCE", "EXPEDITION", "EXPERIENCE", "EXPERT", "EXPLOIT", "EXPLOSION", "EXPORT", "EXPOSITION", "EXPRES", "EXPRESSION", "EXTENSION", "EXTERIEUR", "EXTRAIT", "EXTREME",
    "FABLE", "FACADE", "FACE", "FACETTE", "FACILE", "FACON", "FACTEUR", "FACTURE", "FACULTE", "FAIBLE", "FAILLE", "FAIM", "FAISAN", "FAIT", "FALAISE", "FAMILLE", "FAN", "FANFARE", "FANTOME", "FARCE", "FARINE", "FATIGUE", "FAUCON", "FAUTE", "FAUTEUIL", "FAUVE", "FAUX", "FAVEUR", "FAVORI", "FEERIE", "FEMME", "FENTE", "FENETRE", "FER", "FERME", "FERMETURE", "FESSE", "FESTIN", "FESTIVAL", "FETE", "FEU", "FEUILLE", "FEUTRE", "FEVRIER", "FIANCE", "FIBRE", "FICELLE", "FICHIER", "FIDELITE", "FIERTE", "FIEVRE", "FIGUE", "FIGURE", "FIL", "FILE", "FILET", "FILLE", "FILM", "FILS", "FILTRE", "FIN", "FINAL", "FINANCE", "FINESSE", "FIRME", "FISCAL", "FIXATION", "FLACON", "FLAGRANT", "FLAMANT", "FLAMBEAU", "FLAMME", "FLAN", "FLANC", "FLAQUE", "FLASH", "FLECHE", "FLEUR", "FLEUVE", "FLOCON", "FLORAL", "FLOTTE", "FLOU", "FLUIDE", "FLUTE", "FLUX", "FOI", "FOIE", "FOIN", "FOIRE", "FOIS", "FOLIE", "FONCTION", "FOND", "FONDATION", "FONDS", "FONTAINE", "FOOTBALL", "FORCE", "FORET", "FORGE", "FORMAT", "FORME", "FORMULE", "FORT", "FORTERESSE", "FORTUNE", "FOSSE", "FOUDRE", "FOUET", "FOULE", "FOUR", "FOURCHE", "FOURMI", "FOURNEAU", "FOURRIERE", "FOURRURE", "FOYER", "FRACTURE", "FRAICHEUR", "FRAIS", "FRAISE", "FRAMBOISE", "FRANC", "FRANCAIS", "FRANGE", "FRAPPANT", "FRATERNITE", "FRAUDE", "FRAYEUR", "FREIN", "FRELON", "FREQUENCE", "FRERE", "FRESQUE", "FRIGO", "FRIMOUSSE", "FRIPE", "FRISON", "FRISSON", "FRITE", "FRITURE", "FROID", "FROMAGE", "FRONT", "FRONTIERE", "FROTTEMENT", "FRUIT", "FUITE", "FUMEE", "FUREUR", "FUSEE", "FUSEE", "FUSIL", "FUSION", "FUTUR",
    "GAFFE", "GAGE", "GAGNANT", "GAIETE", "GAIN", "GALA", "GALAXIE", "GALERE", "GALERIE", "GALET", "GALETTE", "GALLOIS", "GALOP", "GAMIN", "GAMME", "GANG", "GANT", "GARAGE", "GARANTIE", "GARCON", "GARDE", "GARDIEN", "GARE", "GARGOUILLE", "GARNISON", "GARS", "GASPILLAGE", "GATEAU", "GAUCHE", "GAUFRE", "GAZ", "GAZELLE", "GAZON", "GEANT", "GEL", "GELEE", "GENDARME", "GENDRE", "GENE", "GENERAL", "GENERATION", "GENIE", "GENOU", "GENRE", "GENS", "GENTIL", "GEOGRAPHIE", "GERANT", "GERME", "GESTE", "GESTION", "GIBIER", "GIGOT", "GILET", "GIRAFE", "GIVRE", "GLACE", "GLACON", "GLAIVE", "GLAND", "GLOBE", "GLOIRE", "GLU", "GOLF", "GOMME", "GONDOLE", "GORGE", "GORILLE", "GOSSE", "GOUDRON", "GOUFFRE", "GOUJAT", "GOULOT", "GOURMAND", "GOUT", "GOUTER", "GOUTTE", "GOUVERNAIL", "GRACE", "GRADE", "GRAIN", "GRAINE", "GRAISSE", "GRAMME", "GRAND", "GRANDEUR", "GRANGE", "GRANIT", "GRAPPE", "GRAS", "GRATTE", "GRATUIT", "GRAVE", "GRAVIER", "GRAVITE", "GREFFE", "GRELE", "GRELOT", "GRENADE", "GRENIER", "GRENOUILLE", "GREVE", "GRIFFE", "GRIFFURE", "GRILLE", "GRIMACE", "GRIPPE", "GRIS", "GRIVE", "GROS", "GROSEILLE", "GROSSESSE", "GROTTE", "GROUPE", "GRUE", "GUEPE", "GUERISON", "GUERRE", "GUET", "GUEULE", "GUIDE", "GUIDON", "GUICHET", "GUITARE", "GYMNASE",
    "HABIT", "HABITANT", "HABITUDE", "HACHE", "HAIE", "HAILLON", "HAINE", "HALEINE", "HALL", "HALLE", "HALTE", "HAMEAU", "HAMECON", "HAMSTER", "HANCHE", "HANDICAP", "HANGAR", "HANTE", "HARICOT", "HARMONIE", "HARNAIS", "HARPE", "HASARD", "HATE", "HAUSSE", "HAUT", "HAUTEUR", "HAVRE", "HEBDOMADAIRE", "HELICE", "HELICOPTERE", "HENNE", "HERBE", "HERITAGE", "HERITIERE", "HERMINE", "HEROS", "HERSE", "HETRE", "HEURE", "HIBOU", "HIER", "HIPPOPOTAME", "HIRONDELLE", "HISTOIRE", "HIVER", "HOBBY", "HOCHET", "HOCKEY", "HOMARD", "HOMMAGE", "HOMME", "HONNEUR", "HONTE", "HOPITAL", "HORAIRE", "HORIZON", "HORLOGE", "HORREUR", "HOTEL", "HOTESSE", "HOTTE", "HOUBLON", "HOUE", "HOULE", "HOUSSE", "HUBLOT", "HUCHE", "HUILE", "HUIT", "HUITRE", "HUMAIN", "HUMANITE", "HUMBLE", "HUMEUR", "HUMIDITE", "HUMOUR", "HURLEMENT", "HUTTE", "HYENE", "HYGIENE", "HYMNE", "HYPOTHESE",
    "ICEBERG", "ICONE", "IDEE", "IDENTITE", "IDEOLOGIE", "IDIOT", "IDOLE", "IGLOO", "IGNORANCE", "ILE", "ILLUSION", "IMAGE", "IMAGINATION", "IMBECILE", "IMITATION", "IMMEUBLE", "IMMOBILIER", "IMPACT", "IMPAIR", "IMPASSE", "IMPATIENCE", "IMPERIAL", "IMPORT", "IMPOT", "IMPRESSION", "IMPRIMANTE", "INCENDIE", "INCIDENT", "INCONNU", "INDEX", "INDIEN", "INDICE", "INDIFFERENCE", "INDIGO", "INDIVIDU", "INDUSTRIE", "INEGALITE", "INFANTILE", "INFIRMIER", "INFINI", "INFLATION", "INFLUENCE", "INFO", "INFORMATION", "INGENIEUR", "INGREDIENT", "INITIATIVE", "INJUSTE", "INJUSTICE", "INNOCENCE", "INONDATION", "INQUIETUDE", "INSCRIPTION", "INSECTE", "INSERTION", "INSIGNE", "INSPECTEUR", "INSTANT", "INSTINCT", "INSTITUT", "INSTRUMENT", "INSULTE", "INTELLIGENCE", "INTENTION", "INTERET", "INTERIEUR", "INTERNET", "INTERVENTION", "INTESTIN", "INTIME", "INTRIGUE", "INTRODUCTION", "INVASION", "INVENTION", "INVERSE", "INVESTISSEMENT", "INVITATION", "INVITE", "IODE", "IRIS", "IRONIE", "ISOLATION", "ISSUE", "ITINERAIRE", "IVOIRE", "IVRESSE",
    "JACINTHE", "JADE", "JAGUAR", "JAILLISSEMENT", "JALOUSIE", "JALOUX", "JAMBE", "JAMBON", "JANVIER", "JAPON", "JARDIN", "JARDINIER", "JARGON", "JARRE", "JARRET", "JARS", "JASMIN", "JAUNE", "JAVELOT", "JAZZ", "JEAN", "JEEP", "JERSEY", "JET", "JETEE", "JETON", "JEU", "JEUDI", "JEUNE", "JEUNESSE", "JOIE", "JOINT", "JOKER", "JOLI", "JONC", "JONCTION", "JOUE", "JOUEUR", "JOUR", "JOURNAL", "JOURNEE", "JOYAU", "JOYEUX", "JUDO", "JUGE", "JUGEMENT", "JUILLET", "JUIN", "JUMEAU", "JUMENT", "JUNGLE", "JUPE", "JUPON", "JURY", "JUSTICE", "JUTE",
    "KANGOUROU", "KAOLIN", "KARATE", "KAYAK", "KEPI", "KERMESSE", "KETCHUP", "KILO", "KILOMETRE", "KIOSQUE", "KIRSCH", "KIWI", "KLAXON", "KOALA", "KOBRA", "KRACH",
    "LABEL", "LABEUR", "LABO", "LABORATOIRE", "LABYRINTHE", "LAC", "LACET", "LACHE", "LACUNE", "LAGON", "LAIC", "LAINE", "LAIT", "LAITUE", "LAMA", "LAME", "LAMPE", "LANCE", "LANCEMENT", "LANDE", "LANGAGE", "LANGUE", "LANTERNE", "LAPIN", "LAPTOP", "LARD", "LARGE", "LARGEUR", "LARME", "LARVE", "LASER", "LACET", "LASSITUDE", "LATEX", "LATITUDE", "LAVABO", "LAVANDE", "LAVE", "LEADER", "LECON", "LECTEUR", "LECTURE", "LEGAL", "LEGENDE", "LEGER", "LEGUME", "LENDEMAIN", "LENTILLE", "LEOPARD", "LESSIVE", "LEST", "LETTRE", "LEURRE", "LEVIER", "LEVRE", "LEVURE", "LEZARD", "LIAISON", "LIANE", "LIBELLULE", "LIBERTE", "LIBRAIRIE", "LIBRE", "LICENCE", "LICORNE", "LIERRE", "LIEU", "LIEUE", "LIEVRE", "LIGNE", "LIGUE", "LILAS", "LIMACE", "LIME", "LIMITE", "LIMONADE", "LINGE", "LINGOT", "LINOTTE", "LION", "LIQUIDE", "LIQUEUR", "LIRE", "LIS", "LISERE", "LISIERE", "LISTE", "LIT", "LITIGE", "LITRE", "LIVRAISON", "LIVRE", "LOCAL", "LOCATAIRE", "LOCOMOTIVE", "LOGEMENT", "LOGICIEL", "LOGIQUE", "LOGIS", "LOI", "LOISIR", "LONG", "LONGUEUR", "LOOK", "LOQUET", "LOT", "LOTERIE", "LOTUS", "LOUANGE", "LOUP", "LOUPE", "LOURD", "LOUTRE", "LOYER", "LOYAUTE", "LUEUR", "LUGE", "LUMIERE", "LUNDI", "LUNE", "LUNETTE", "LUTIN", "LUTTE", "LUXE", "LYCEE", "LYNX", "LYRE",
    "MACADAM", "MACHINE", "MACHOIRE", "MACON", "MADAME", "MAGASIN", "MAGAZINE", "MAGIE", "MAGICIEN", "MAGNETO", "MAGNOLIA", "MAIGRE", "MAIL", "MAILLE", "MAILLET", "MAILLOT", "MAIN", "MAINTIEN", "MAIRE", "MAIRIE", "MAIS", "MAISON", "MAITRE", "MAITRESSE", "MAJESTE", "MAJOR", "MAJORITE", "MAL", "MALADE", "MALADIE", "MALAIS", "MALAISES", "MALE", "MALHEUR", "MALICE", "MALLE", "MALT", "MAMAN", "MAMELLE", "MAMMOUTH", "MANCHE", "MANDARINE", "MANDAT", "MANEGE", "MANGA", "MANGER", "MANGUE", "MANIE", "MANIFESTATION", "MANOIR", "MANQUE", "MANTEAU", "MANUEL", "MAQUETTE", "MAQUILLAGE", "MARAIS", "MARATRE", "MARBRE", "MARC", "MARCHAND", "MARCHE", "MARDI", "MARE", "MARECAGE", "MAREE", "MARGE", "MARGUERITE", "MARI", "MARIAGE", "MARIN", "MARINE", "MARIONNETTE", "MARKETING", "MARMITE", "MARQUE", "MARRON", "MARS", "MARTEAU", "MASCOTTE", "MASQUE", "MASSAGE", "MASSE", "MASSIF", "MASTOC", "MAT", "MATCH", "MATELAS", "MATERIEL", "MATHS", "MATIERE", "MATIN", "MATINEE", "MATRICE", "MATURITE", "MAUVAIS", "MAUVE", "MAXIMUM", "MAYONNAISE", "MAZOUT", "MECANICIEN", "MECANIQUE", "MECANO", "MECHE", "MEDAILLE", "MEDECIN", "MEDECINE", "MEDIA", "MEDICAMENT", "MEDUSE", "MEETING", "MEFIANCE", "MEGOT", "MEILLEUR", "MELANGE", "MELODIE", "MELON", "MEMBRE", "MEME", "MEMOIRE", "MENACE", "MENAGE", "MENDIANT", "MENSONGE", "MENTAL", "MENTHE", "MENTION", "MENTON", "MENU", "MENU", "MEPRIS", "MER", "MERCI", "MERCREDI", "MERE", "MERINGUE", "MERITE", "MERLE", "MERVEILLE", "MESANGE", "MESSAGE", "MESSE", "MESURE", "METAL", "METEO", "METHODE", "METIER", "METRE", "METRO", "MEUBLE", "MEURTRE", "MEUTE", "MICRO", "MICROBE", "MIDI", "MIE", "MIEL", "MIETTE", "MIEUX", "MIGRATION", "MILIEU", "MILITAIRE", "MILLE", "MILLION", "MIME", "MINCE", "MINE", "MINERAI", "MINEUR", "MINIMUM", "MINISTRE", "MINUIT", "MINUTE", "MIRACLE", "MIRAGE", "MIROIR", "MISERE", "MISERICORDE", "MISS", "MISSION", "MITAINE", "MITE", "MITRAILLE", "MIXTE", "MOBILE", "MOBILIER", "MODE", "MODELE", "MODERNE", "MODESTIE", "MODULE", "MOELLE", "MOEURS", "MOI", "MOINS", "MOINE", "MOINEAU", "MOIS", "MOISSON", "MOITIE", "MOKA", "MOLE", "MOLECULE", "MOMENT", "MOMIE", "MONARCHIE", "MONDE", "MONITEUR", "MONNAIE", "MONSIEUR", "MONSTRE", "MONT", "MONTAGE", "MONTAGNE", "MONTANT", "MONTRE", "MONUMENT", "MOQUETTE", "MOQUERIE", "MORAL", "MORALE", "MORCEAU", "MORGUE", "MORSE", "MORT", "MORTIER", "MORUE", "MOSAIQUE", "MOSQUEE", "MOT", "MOTEUR", "MOTIF", "MOTION", "MOTO", "MOU", "MOUCHE", "MOUCHOIR", "MOUE", "MOUETTE", "MOUFLON", "MOULE", "MOULIN", "MOUSSE", "MOUSTACHE", "MOUSTIQUE", "MOUTARDE", "MOUTON", "MOUVEMENT", "MOYEN", "MUET", "MUGUET", "MULE", "MULTITUDE", "MUR", "MURAILLE", "MURE", "MURMURE", "MUSCLE", "MUSEE", "MUSEAU", "MUSICIEN", "MUSIQUE", "MUTATION", "MYSTERE", "MYTHE",
    "NAGE", "NAIN", "NAISSANCE", "NAPPE", "NATION", "NATURE", "NAUFRAGE", "NAVETTE", "NAVIRE", "NAVET", "NEANT", "NECESSAIRE", "NECTAR", "NEIGE", "NEON", "NERF", "NERVEUX", "NET", "NETTOYAGE", "NEUF", "NEURONE", "NEUTRE", "NEVEU", "NEZ", "NICHE", "NICKEL", "NID", "NIECE", "NIVEAU", "NOBLESSE", "NOCE", "NOEL", "NOEUD", "NOIR", "NOISETTE", "NOIX", "NOM", "NOMBRE", "NOMBRIL", "NORD", "NORME", "NOTE", "NOTICE", "NOTION", "NOTRE", "NOUILLE", "NOUNOU", "NOURRICE", "NOURRITURE", "NOUVEAU", "NOVEMBRE", "NOYADE", "NOYAU", "NUAGE", "NUANCE", "NUIT", "NUL", "NUMERO", "NUQUE", "NYLON",
    "OASIS", "OBJECTIF", "OBJET", "OBLIGATION", "OBSCURITE", "OBSERVATION", "OBSTACLE", "OCCASION", "OCCIDENT", "OCEAN", "OCTOBRE", "ODEUR", "OEIL", "OEILLET", "OEUF", "OEUVRE", "OFFENSE", "OFFICIER", "OFFRE", "OGRE", "OIE", "OIGNON", "OISEAU", "OLIVE", "OMBRE", "OMELETTE", "ONCLE", "ONDE", "ONGLE", "ONGUENT", "ONZE", "OPERA", "OPERATION", "OPINION", "OPPORTUNITE", "OPPOSITION", "OPTIQUE", "OPTION", "OR", "ORAGE", "ORAL", "ORANGE", "ORBITE", "ORCHESTRE", "ORDINATEUR", "ORDONNANCE", "ORDRE", "ORDURE", "OREILLE", "OREILLER", "ORGANE", "ORGANISME", "ORGUE", "ORGUEIL", "ORIENT", "ORIGINE", "ORME", "ORPHELIN", "ORTEIL", "OS", "OSIER", "OTAGE", "OTARIE", "OUATE", "OUBLI", "OUEST", "OUI", "OURAGAN", "OURLET", "OURS", "OUTIL", "OUVERTURE", "OUVRAGE", "OUVRIER", "OVALE", "OXYGENE",
    "PACTE", "PAGE", "PAGODE", "PAIE", "PAILLE", "PAIN", "PAIRE", "PAIX", "PALACE", "PALAIS", "PALETTE", "PALIER", "PALME", "PALMIER", "PALOURDE", "PAMPLEMOUSSE", "PANIER", "PANIQUE", "PANNE", "PANNEAU", "PANTHERE", "PANTIN", "PANTOUFLE", "PAON", "PAPA", "PAPE", "PAPIER", "PAPILLON", "PAQUEBOT", "PAQUET", "PARADIS", "PARAGRAPHE", "PARAPLUIE", "PARASOL", "PARC", "PARCELLE", "PARCHEMIN", "PARCOURS", "PARDESSUS", "PARDON", "PARENT", "PARESSE", "PARFUM", "PARI", "PARLEMENT", "PAROLE", "PARQUET", "PART", "PARTENAIRE", "PARTI", "PARTICULE", "PARTIE", "PARTITION", "PAS", "PASSAGE", "PASSAGER", "PASSE", "PASSEPORT", "PASSION", "PASTEL", "PASTEQUE", "PASTILLE", "PATE", "PATATE", "PATIENT", "PATIN", "PATIO", "PATISSERIE", "PATRIE", "PATRIMOINE", "PATRON", "PATTE", "PAUSE", "PAUVRE", "PAUVRETE", "PAVILLON", "PAYS", "PAYSAGE", "PAYSAN", "PEAU", "PECHE", "PECHEUR", "PEDALE", "PEIGNE", "PEINE", "PEINTRE", "PEINTURE", "PELERINE", "PELICAN", "PELLE", "PELLICULE", "PELOUSE", "PELUCHE", "PENDULE", "PENINSULE", "PENSEE", "PENSION", "PENTE", "PENURIE", "PEPIN", "PERCAGE", "PERCHE", "PERDRIX", "PERE", "PERFORMANCE", "PERIL", "PERIODE", "PERLE", "PERMANENCE", "PERMIS", "PERROQUET", "PERRUQUE", "PERSIL", "PERSONNE", "PERSONNEL", "PERSPECTIVE", "PERTE", "PESANTEUR", "PESTE", "PETALE", "PETARD", "PETIT", "PETROLE", "PEUPLE", "PEUR", "PHARE", "PHARMACIE", "PHASE", "PHENOMENE", "PHILO", "PHOQUE", "PHOTO", "PHRASE", "PHYSIQUE", "PIANO", "PIC", "PIE", "PIECE", "PIED", "PIEGE", "PIERRE", "PIETON", "PIEU", "PIGEON", "PIGMENT", "PILE", "PILIER", "PILULE", "PILOTE", "PIN", "PINCE", "PINCEAU", "PINGOUIN", "PIOCHE", "PION", "PIPE", "PIQUE", "PIQUURE", "PIRATE", "PIRE", "PIROGUE", "PISCINE", "PISSENLIT", "PISTE", "PISTOLET", "PITIE", "PITRE", "PIVOT", "PIZZA", "PLACARD", "PLACE", "PLAFOND", "PLAGE", "PLAIDOIRIE", "PLAIE", "PLAINE", "PLAINTE", "PLAISIR", "PLAN", "PLANCHE", "PLANCHER", "PLANETE", "PLANNING", "PLANTE", "PLAQUE", "PLAQUETTE", "PLASTIQUE", "PLAT", "PLATANE", "PLATEAU", "PLATINE", "PLATRE", "PLEIN", "PLEUR", "PLI", "PLOMB", "PLONGEON", "PLUIE", "PLUME", "PLUS", "PNEU", "POCHE", "POCHETTE", "POELE", "POEME", "POESIE", "POETE", "POIDS", "POIGNEE", "POIGNET", "POIL", "POING", "POINT", "POINTE", "POINTURE", "POIRE", "POIREAU", "POISON", "POISSON", "POITRINE", "POIVRE", "POIVRON", "POLAIRE", "POLE", "POLICE", "POLITIQUE", "POLLEN", "POLLUTION", "POLO", "POMME", "POMPE", "POMPIER", "PONCHO", "PONT", "PONEY", "POPULATION", "PORC", "PORCELAINE", "PORT", "PORTAIL", "PORTE", "PORTEE", "PORTER", "PORTEFEUILLE", "PORTION", "PORTRAIT", "POSE", "POSITION", "POSSIBLE", "POSTE", "POSTURE", "POT", "POTAGE", "POTEAU", "POTERIE", "POTION", "POUBELLE", "POUCE", "POUDRE", "POULE", "POULET", "POULPE", "POULS", "POUMON", "POUPEE", "POURBOIRE", "POURPRE", "POURQUOI", "POUSSE", "POUSSETTE", "POUSSIERE", "POUTRE", "POUVOIR", "PRAIRIE", "PRATIQUE", "PRECAUTION", "PRECISION", "PREFET", "PREFERENCE", "PREJUGES", "PREMIER", "PRENOM", "PRESENCE", "PRESENT", "PRESIDENT", "PRESSE", "PRESSION", "PRESTIGE", "PRETRE", "PREUVE", "PRIERE", "PRINCE", "PRINCESSE", "PRINCIPE", "PRINTEMPS", "PRIORITE", "PRIS", "PRISE", "PRISON", "PRIVE", "PRIVILEGE", "PRIX", "PROBLEME", "PROCEDE", "PROCES", "PROCHAIN", "PROCHE", "PRODUCTION", "PRODUIT", "PROF", "PROFESSEUR", "PROFIL", "PROFIT", "PROFOND", "PROGRAMME", "PROGRES", "PROJET", "PROLOGUE", "PROMENADE", "PROMESSE", "PROMOTION", "PROPAGANDE", "PROPRE", "PROPRIETE", "PROSE", "PROTECTION", "PROTEINE", "PROTESTATION", "PROTOCOLE", "PROUESSE", "PROVERBE", "PROVINCE", "PROVISION", "PRUNE", "PSY", "PUBLIC", "PUBLICITE", "PUCE", "PUDEUR", "PUISSANCE", "PUITS", "PULL", "PULSE", "PUMA", "PUNAISE", "PUNITION", "PUPITRE", "PUR", "PUREE", "PURETE", "PUZZLE", "PYJAMA", "PYRAMIDE",
    "QUAI", "QUALITE", "QUAND", "QUANTITE", "QUART", "QUARTIER", "QUARTZ", "QUATORZE", "QUATRE", "QUESTION", "QUETE", "QUEUE", "QUICHE", "QUILLE", "QUINZE", "QUOTA", "QUOTIDIEN",
    "RABAIS", "RABOT", "RACE", "RACINE", "RACKET", "RACLETTE", "RADAR", "RADEAU", "RADIATEUR", "RADIS", "RADIO", "RAFALE", "RAFFINERIE", "RAGE", "RAID", "RAIE", "RAIL", "RAINURE", "RAISIN", "RAISON", "RALENTI", "RALLYE", "RAME", "RAMPE", "RANG", "RANGEE", "RAPIDE", "RAPIDITE", "RAPPEL", "RAPPORT", "RAQUETTE", "RARETE", "RASOIR", "RAT", "RATE", "RATEAU", "RATION", "RAVIN", "RAYON", "RAYURE", "REACTION", "REACTEUR", "REALITE", "REBELLE", "REBORD", "RECEPTION", "RECETTE", "RECHERCHE", "RECIF", "RECIT", "RECOLTE", "RECOMMANDATION", "RECOMPENSE", "RECORD", "RECOURS", "RECREATION", "RECTEUR", "RECTANGLE", "RECU", "RECUL", "REDACTION", "REEL", "REFERENCE", "REFLET", "REFLEXE", "REFORME", "REFRAIN", "REFUGE", "REFUGIE", "REFUS", "REGARD", "REGIME", "REGION", "REGISTRE", "REGLE", "REGLEMENT", "REGNE", "REGRET", "REINE", "REIN", "REJET", "RELAIS", "RELATION", "RELEVE", "RELIEF", "RELIGION", "RELIURE", "REMARQUE", "REMEDE", "REMERCIEMENT", "REMISE", "REMPART", "REMPLACANT", "RENARD", "RENCONTRE", "RENDEZ", "RENDEMENT", "RENE", "RENOMMEE", "RENSEIGNEMENT", "RENTE", "RENTREE", "RENVOI", "REPARATION", "REPAS", "REPERE", "REPLIQUE", "REPONSE", "REPORTAGE", "REPOS", "REPRESENTATION", "REPRISE", "REPROCHE", "REPTILE", "REPUBLIQUE", "REPUTATION", "REQUIN", "REQUETE", "RESEAU", "RESERVE", "RESERVOIR", "RESIDENCE", "RESIDU", "RESINE", "RESISTANCE", "RESOLUTION", "RESPECT", "RESPIRATION", "RESPONSABLE", "RESSORT", "RESSOURCE", "RESTE", "RESTAURANT", "RESULTAT", "RESUME", "RETARD", "RETENEUE", "RETINE", "RETOUR", "RETRAITE", "REUNION", "REUSSITE", "REVE", "REVEIL", "REVELATION", "REVENU", "REVERENCE", "REVERS", "REVOLTE", "REVOLUTION", "REVUE", "REZ", "RHUME", "RHUM", "RICHE", "RICHESSE", "RIDE", "RIDEAU", "RIEN", "RIGUEUR", "RIME", "RINCAGE", "RING", "RIRE", "RISQUE", "RITE", "RITUEL", "RIVAGE", "RIVAL", "RIVE", "RIVIERE", "RIZ", "ROBE", "ROBINET", "ROBOT", "ROCHE", "ROCHER", "ROI", "ROLE", "ROMAN", "ROMANCE", "ROND", "RONDE", "RONFLEMENT", "ROSE", "ROSEAU", "ROSEE", "ROTATION", "ROTI", "ROUE", "ROUGE", "ROUILLE", "ROULEAU", "ROULETTE", "ROULOTTE", "ROUTE", "ROUTINE", "ROYAUME", "RUBAN", "RUBIS", "RUCHE", "RUE", "RUELLE", "RUGISSEMENT", "RUINE", "RUISSEAU", "RUMEUR", "RUPTURE", "RUSE", "RYTHME",
    "SABLE", "SABOT", "SABRE", "SAC", "SAGE", "SAGESSE", "SAIN", "SAINT", "SAISON", "SALADE", "SALAIRE", "SALE", "SALETE", "SALIVE", "SALLE", "SALON", "SALOPETTE", "SALSA", "SALUT", "SAMEDI", "SANDALE", "SANDWICH", "SANG", "SANGLIER", "SANGLOT", "SANS", "SANTE", "SAPIN", "SARDINE", "SATELLITE", "SATIN", "SATISFACTION", "SAUCE", "SAUCISSE", "SAUGE", "SAULE", "SAUMON", "SAUT", "SAUVAGE", "SAUVEUR", "SAVANE", "SAVANT", "SAVEUR", "SAVOIR", "SAVON", "SCANDALE", "SCEAU", "SCENARIO", "SCENE", "SCEPTRE", "SCHEMA", "SCIENCE", "SCIE", "SCIURE", "SCOLAIRE", "SCORE", "SCORPION", "SCRUPULE", "SCULPTURE", "SEANCE", "SEAU", "SEC", "SECHE", "SECOND", "SECONDE", "SECOURS", "SECRET", "SECRETAIRE", "SECTE", "SECTEUR", "SECTION", "SECURITE", "SEDIMENT", "SEIGLE", "SEIGNEUR", "SEIN", "SEIZE", "SEJOUR", "SEL", "SELECTION", "SELLE", "SEMAINE", "SEMELLE", "SEMENCE", "SEMESTRE", "SEMINAIRE", "SENS", "SENSATION", "SENSIBILITE", "SENTIER", "SENTIMENT", "SENTINELLE", "SEPT", "SEPTEMBRE", "SEQUENCE", "SERIE", "SERINGUE", "SERMENT", "SERRE", "SERPENT", "SERRURE", "SERVEUR", "SERVICE", "SERVIETTE", "SERVITUDE", "SEUIL", "SEUL", "SEVE", "SEXE", "SHAMPOING", "SHORT", "SIECLE", "SIEGE", "SIESTE", "SIFFLET", "SIGLE", "SIGNAL", "SIGNATURE", "SIGNE", "SILENCE", "SILHOUETTE", "SILO", "SIMPLE", "SIMPLICITE", "SINGE", "SIRENE", "SIROP", "SITE", "SITUATION", "SIX", "SKI", "SLIP", "SLOGAN", "SMOKING", "SNACK", "SOBRE", "SOCIAL", "SOCIETE", "SOCLE", "SOEUR", "SOFA", "SOIE", "SOIF", "SOIN", "SOIR", "SOIREE", "SOL", "SOLDAT", "SOLDE", "SOLEIL", "SOLIDE", "SOLIDITE", "SOLITUDE", "SOLO", "SOLUTION", "SOMBRE", "SOMME", "SOMMEIL", "SOMMET", "SON", "SONDAGE", "SONDE", "SONGE", "SONNERIE", "SORCELLERIE", "SORCIER", "SORT", "SORTE", "SORTIE", "SOSIE", "SOUCI", "SOUCOUPE", "SOUDE", "SOUFFLE", "SOUFFRANCE", "SOUFRE", "SOUHAIT", "SOULAGEMENT", "SOULIER", "SOUPAPE", "SOUPE", "SOUPIR", "SOUPLE", "SOURCE", "SOURCIL", "SOURD", "SOURIRE", "SOURIS", "SOUTIEN", "SOUTIF", "SOUVENIR", "SOUVERAIN", "SPAGHETTI", "SPECIALITE", "SPECTACLE", "SPECTRE", "SPHERE", "SPIRALE", "SPIRITUEL", "SPLENDEUR", "SPORT", "SPOT", "SPRINT", "SQUELETTE", "STABILITE", "STADE", "STAGE", "STAND", "STANDARD", "STAR", "STATION", "STATISTIQUE", "STATUE", "STATUT", "STEAK", "STYLO", "STOCK", "STOP", "STORE", "STRATEGIE", "STRESS", "STRUCTURE", "STUDIO", "STUPEFIANT", "STYLE", "SUCCES", "SUCRE", "SUD", "SUEUR", "SUFFRAGE", "SUGGESTION", "SUICIDE", "SUIE", "SUITE", "SUIVANT", "SUJET", "SUPER", "SUPERIEUR", "SUPERMARCHE", "SUPPORT", "SUPPOSITION", "SUR", "SURFACE", "CHIRURGIEN", "SURPRISE", "SURVEILLANCE", "SUSPECT", "SYLLABE", "SYMBOLE", "SYMETRIE", "SYMPTOMES", "SYNDICAT", "SYNTHESE", "SYSTEME",
    "TABAC", "TABLE", "TABLEAU", "TABLETTE", "TABLIER", "TABOURET", "TACHE", "TACTIQUE", "TAILLE", "TALENT", "TALON", "TAMBOUR", "TAMIS", "TAMPON", "TANGO", "TANTE", "TAPIS", "TAPISSERIE", "TARD", "TARIF", "TARTE", "TARTINE", "TAS", "TASSE", "TAUREAU", "TAUX", "TAXE", "TAXI", "TECHNIQUE", "TECHNOLOGIE", "TEINT", "TEINTURE", "TELEPHONE", "TELESCOPE", "TELEVISION", "TEMOIN", "TEMPE", "TEMPERATURE", "TEMPETE", "TEMPLE", "TEMPS", "TENDANCE", "TENDRESSE", "TENEBRE", "TENNIS", "TENSION", "TENTATION", "TENTATIVE", "TENTE", "TENUE", "TERME", "TERMINUS", "TERRAIN", "TERRASSE", "TERRE", "TERREUR", "TERRITOIRE", "TEST", "TESTAMENT", "TETE", "TEXTE", "TEXTILE", "THE", "THEATRE", "THEME", "THEORIE", "THERMOMETRE", "THON", "TICKET", "TIGRE", "TIGRE", "TIMBRE", "TIMIDITE", "TIR", "TIRAGE", "TIROIR", "TISSU", "TITRE", "TOAST", "TOILE", "TOILETTE", "TOIT", "TOITURE", "TOLE", "TOLERANCE", "TOMATE", "TOMBE", "TOMBEAU", "TON", "TONNE", "TONNEAU", "TONNERRE", "TOQUE", "TORCHE", "TORCHON", "TORRENT", "TORTUE", "TORTURE", "TOTAL", "TOUCHE", "TOUR", "TOURBE", "TOURISTE", "TOURMENT", "TOURNEE", "TOURNOI", "TOURNEVIS", "TOURTE", "TOUT", "TOUX", "TRACE", "TRACTEUR", "TRADITION", "TRADUCTION", "TRAFIC", "TRAHISON", "TRAIN", "TRAINEAU", "TRAIT", "TRAITE", "TRAJET", "TRAME", "TRAMWAY", "TRANCHE", "TRANQUILLITE", "TRANSACTION", "TRANSFERT", "TRANSIT", "TRANSPORT", "TRAPPE", "TRAVAIL", "TRAVEE", "TRAVERS", "TRAVERSEE", "TREFLE", "TREILLIS", "TREMBLEMENT", "TRENTE", "TRESOR", "TREVE", "TRI", "TRIANGLE", "TRIBUNE", "TRIBUNAL", "TRICOT", "TRIOMPHE", "TRIPES", "TRISTESSE", "TROC", "TROIS", "TROMBONE", "TROMPE", "TROPHEE", "TROTTOIR", "TROU", "TROUBLE", "TROUPE", "TROUPEAU", "TROUSSE", "TRUC", "TRUITE", "TUBE", "TUERIE", "TUILE", "TULIPE", "TUMEUR", "TUNNEL", "TURBINE", "TURBO", "TURBULENCE", "TUTEUR", "TUTELLE", "TUYAU", "TYPE", "TYPHON", "TYRAN"
];

/* --- CONFIGURATION GLOBALE --- */
const SYSTEM = {
    dictionary: [],
    targetHash: null, // On stocke le hash, pas le mot
    targetDateId: null,
    mode: 'daily', // 'daily', 'training', 'archive'
    startTime: null,
    endTime: null,
    won: false,
    history: []
};

const SETTINGS = {
    sound: false,
    haptic: false,
    eco: false,
    theme: 'auto'
};

const DOM = {
    input: document.getElementById('user-input'),
    form: document.getElementById('guess-form'),
    list: document.getElementById('best-list'),
    autoList: document.getElementById('autocomplete-list'),
    modals: {
        settings: document.getElementById('settings-modal'),
        victory: document.getElementById('victory-modal')
    },
    toggles: {
        anim: document.getElementById('anim-toggle'),
        theme: document.getElementById('theme-toggle'),
        sound: document.getElementById('sound-toggle'),
        haptic: document.getElementById('haptic-toggle')
    },
    audio: {
        click: document.getElementById('sfx-click'),
        error: document.getElementById('sfx-error'),
        win: document.getElementById('sfx-win')
    }
};

/* --- 1. CORE SYSTEM & SECURITY --- */

async function initLexicore() {
    loadSettings();
    await loadDictionary();
    setupEventListeners();
    
    // Auto-detect theme si 'auto'
    if (SETTINGS.theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark);
        // Switch visuel suit la détection
        DOM.toggles.theme.checked = prefersDark;
    } else {
        applyTheme(SETTINGS.theme === 'dark');
    }

    // Initialisation du jeu selon le mode
    startSession(SYSTEM.mode);
}

async function loadDictionary() {
    try {
        const response = await fetch('dictionary.json');
        if (!response.ok) throw new Error("Erreur chargement dico");
        SYSTEM.dictionary = await response.json();
    } catch (e) {
        console.error("System Failure:", e);
        showToast("Erreur système: Dictionnaire manquant", true);
        // Fallback minimal de secours
        SYSTEM.dictionary = ["LEXICORE", "SYSTEME", "ERREUR"]; 
    }
}

// Sécurité : Hash SHA-256 pour ne pas stocker le mot en clair
async function hashString(str) {
    const msgBuffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/* --- 2. GAME ENGINE --- */

function getDaySeed(dateObj = new Date()) {
    // Reset à minuit locale
    return Math.floor((dateObj.setHours(0,0,0,0) - new Date('2023-01-01').getTime()) / 86400000);
}

function getWordBySeed(seed) {
    const x = Math.sin(seed * 9999) * 10000;
    const index = Math.floor((x - Math.floor(x)) * SYSTEM.dictionary.length);
    return SYSTEM.dictionary[index];
}

async function startSession(mode, dateOverride = null) {
    SYSTEM.mode = mode;
    SYSTEM.won = false;
    SYSTEM.history = [];
    SYSTEM.startTime = null;
    SYSTEM.endTime = null;
    
    let rawTarget = "";

    if (mode === 'daily') {
        SYSTEM.targetDateId = getDaySeed();
        document.getElementById('game-mode-badge').innerHTML = `JOUR #${SYSTEM.targetDateId}`;
        rawTarget = getWordBySeed(SYSTEM.targetDateId);
        loadSaveState(SYSTEM.targetDateId); // Charger sauvegarde si existe
    } else if (mode === 'archive' && dateOverride) {
        SYSTEM.targetDateId = getDaySeed(new Date(dateOverride));
        document.getElementById('game-mode-badge').innerHTML = `ARCHIVE #${SYSTEM.targetDateId}`;
        rawTarget = getWordBySeed(SYSTEM.targetDateId);
    } else {
        // Training
        document.getElementById('game-mode-badge').innerText = "ENTRAÎNEMENT";
        rawTarget = SYSTEM.dictionary[Math.floor(Math.random() * SYSTEM.dictionary.length)];
    }

    // HASHAGE IMMÉDIAT DU MOT CIBLE
    SYSTEM.targetHash = await hashString(rawTarget);
    
    // IMPORTANT: Pour calculer la distance Levenshtein, on a besoin du mot en clair.
    // Compromis sécurité/client-side : On garde le mot en clair dans une variable locale 'private'
    // inaccessible depuis la console globale facilement si on encapsulait tout dans un IIFE.
    // Ici, on le stocke dans SYSTEM._debugTarget (convention privée) pour le moteur.
    SYSTEM._targetSecret = rawTarget; 

    updateUI();
}

/* --- 3. INPUT & AUTOCOMPLETE --- */

DOM.input.addEventListener('input', function(e) {
    playAudio('click', 0.2); // Son de frappe très léger
    const val = this.value.toUpperCase();
    closeAutocomplete();
    if (!val) return;
    
    // Filtrer (max 5 suggestions)
    const matches = SYSTEM.dictionary.filter(w => w.startsWith(val)).slice(0, 5);
    
    if (matches.length > 0) {
        DOM.autoList.classList.remove('hidden');
        matches.forEach(word => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.innerHTML = `<strong>${word.substr(0, val.length)}</strong>${word.substr(val.length)}`;
            div.addEventListener('click', () => {
                DOM.input.value = word;
                closeAutocomplete();
                DOM.input.focus();
            });
            DOM.autoList.appendChild(div);
        });
    }
});

function closeAutocomplete() {
    DOM.autoList.innerHTML = '';
    DOM.autoList.classList.add('hidden');
}

DOM.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    closeAutocomplete();
    
    if (SYSTEM.won && SYSTEM.mode === 'daily') {
        showVictoryModal(false);
        return;
    }

    let inputVal = DOM.input.value.trim().toUpperCase();
    inputVal = inputVal.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalise accents

    if (!inputVal) return;

    if (!SYSTEM.dictionary.includes(inputVal)) {
        showToast("Mot inconnu dans le système", true);
        triggerHaptic([50, 50, 50]); // Erreur vibration
        playAudio('error');
        return;
    }

    if (SYSTEM.history.find(h => h.word === inputVal)) {
        showToast(`Redondance détectée : ${inputVal}`);
        playAudio('error');
        DOM.input.value = '';
        return;
    }

    // Start Timer
    if (!SYSTEM.startTime) SYSTEM.startTime = Date.now();

    // Calcul Score
    const score = calculateScore(inputVal, SYSTEM._targetSecret);
    const entry = { word: inputVal, temp: score, time: Date.now() };
    SYSTEM.history.push(entry);

    // Vérification Victoire par Hash (Double check sécurité)
    const inputHash = await hashString(inputVal);
    
    if (inputHash === SYSTEM.targetHash) {
        handleWin();
    } else {
        triggerHaptic(20); // Petit retour tactile
        playAudio('click');
        saveGameState();
        renderResultCard(entry);
        updateHistoryUI();
    }
    DOM.input.value = '';
});

/* --- 4. LOGIC & MATHS --- */

function levenshtein(s1, s2) {
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) costs[j] = j;
            else if (j > 0) {
                let newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function calculateScore(word, target) {
    if (word === target) return 100.0;
    const dist = levenshtein(word, target);
    const maxLen = Math.max(word.length, target.length);
    let score = (maxLen - dist) / maxLen;
    return Math.max(0, score * 100).toFixed(2);
}

/* --- 5. UI RENDERING & FEEDBACK --- */

function renderResultCard(data) {
    const card = document.getElementById('current-guess-card');
    card.classList.remove('hidden');
    
    document.getElementById('current-word').innerText = data.word;
    document.getElementById('current-temp').innerText = data.temp + "°";
    
    const color = getTempColor(data.temp);
    document.getElementById('current-temp').style.color = color;
    card.style.borderColor = color;
    document.getElementById('current-bar').style.background = color;
    document.getElementById('current-bar').style.width = data.temp + '%';
    document.getElementById('temp-indicator').innerText = getEmoji(data.temp);
}

function updateHistoryUI() {
    DOM.list.innerHTML = '';
    document.getElementById('history-count').innerText = `${SYSTEM.history.length} essais`;

    const sorted = [...SYSTEM.history].sort((a, b) => b.temp - a.temp);
    
    sorted.forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = 'guess-item';
        const color = getTempColor(item.temp);
        li.style.borderLeftColor = color;
        
        // Nouvelle Timeline visuelle
        const timelineHTML = `
            <div class="timeline-dot-track">
                <div class="timeline-dot" style="left: ${item.temp}%; background: ${color}"></div>
            </div>
        `;

        li.innerHTML = `
            <div class="guess-left">
                <span class="guess-word">${item.word}</span>
            </div>
            <div class="guess-left">
                ${timelineHTML}
                <span class="guess-temp" style="color:${color}">${item.temp}°</span>
            </div>
        `;
        DOM.list.appendChild(li);
    });
}

function getTempColor(t) {
    if (t < 25) return 'var(--cold-color)';
    if (t < 50) return 'var(--neutral-color)';
    if (t < 75) return 'var(--warm-color)';
    if (t < 99) return 'var(--hot-color)';
    return 'var(--win-color)';
}

function getEmoji(t) {
    if (t < 25) return '❄️';
    if (t < 50) return '💧';
    if (t < 75) return '🔥';
    if (t < 99) return '🌋';
    return '💎';
}

/* --- 6. WIN & STATS --- */

function handleWin() {
    SYSTEM.won = true;
    SYSTEM.endTime = Date.now();
    saveGameState();
    updateStats(true); // Update Stats Globales
    
    triggerHaptic([100, 50, 100, 50, 200]); // Vibration victoire
    playAudio('win');
    
    renderResultCard(SYSTEM.history[SYSTEM.history.length - 1]);
    updateHistoryUI();
    
    setTimeout(() => showVictoryModal(true), 1000);
}

function updateStats(isWin) {
    if (SYSTEM.mode !== 'daily') return; // Stats seulement pour mode quotidien

    const stats = JSON.parse(localStorage.getItem('lexicore_global_stats') || '{"played":0, "wins":0, "streak":0, "maxStreak":0, "totalAttempts":0}');
    
    if (isWin) {
        stats.played++;
        stats.wins++;
        stats.streak++;
        if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
        stats.totalAttempts += SYSTEM.history.length;
    } else {
        // En cas de défaite (si on implémente un abandon)
        stats.streak = 0;
    }
    localStorage.setItem('lexicore_global_stats', JSON.stringify(stats));
}

function showVictoryModal(animate) {
    const duration = SYSTEM.endTime - SYSTEM.startTime;
    const attempts = SYSTEM.history.length;
    
    document.getElementById('victory-word-display').innerText = SYSTEM._targetSecret;
    document.getElementById('stat-attempts').innerText = attempts;
    document.getElementById('stat-time').innerText = formatTime(duration);
    
    // Stats globales
    const stats = JSON.parse(localStorage.getItem('lexicore_global_stats') || '{}');
    document.getElementById('streak-val').innerText = stats.streak || 0;
    const avg = stats.played ? (stats.totalAttempts / stats.played).toFixed(1) : 0;
    document.getElementById('avg-val').innerText = avg;

    DOM.modals.victory.classList.remove('hidden');

    // Afficher bouton Rejouer seulement si entrainement
    const restartBtn = document.getElementById('restart-btn');
    if(SYSTEM.mode === 'training') {
        restartBtn.classList.remove('hidden');
        restartBtn.onclick = () => {
            DOM.modals.victory.classList.add('hidden');
            startSession('training');
        };
    } else {
        restartBtn.classList.add('hidden');
    }
}

/* --- 7. UTILS & SETTINGS --- */

function playAudio(type, volume = 1) {
    if (!SETTINGS.sound) return;
    const audio = DOM.audio[type];
    if (audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play().catch(e => console.log("Audio prevented"));
    }
}

function triggerHaptic(pattern) {
    if (SETTINGS.haptic && navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

function showToast(msg, error = false) {
    const t = document.getElementById('toast-message');
    t.innerText = msg;
    t.style.background = error ? 'var(--burn-color)' : 'var(--text-primary)';
    t.style.color = error ? 'white' : 'var(--bg-color)';
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 2500);
}

function formatTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    return `${m}m ${s % 60}s`;
}

// Gestion Sauvegarde (LocalStorage)
function saveGameState() {
    if (SYSTEM.mode !== 'daily') return; // On ne sauvegarde que le daily
    localStorage.setItem(`lexicore_save_${SYSTEM.targetDateId}`, JSON.stringify(SYSTEM.history));
    localStorage.setItem(`lexicore_meta_${SYSTEM.targetDateId}`, JSON.stringify({
        start: SYSTEM.startTime,
        end: SYSTEM.endTime,
        won: SYSTEM.won
    }));
}

function loadSaveState(id) {
    try {
        const hist = localStorage.getItem(`lexicore_save_${id}`);
        const meta = JSON.parse(localStorage.getItem(`lexicore_meta_${id}`) || '{}');
        if (hist) {
            SYSTEM.history = JSON.parse(hist);
            SYSTEM.startTime = meta.start;
            SYSTEM.endTime = meta.end;
            SYSTEM.won = meta.won;
            
            if (SYSTEM.history.length > 0) {
                updateHistoryUI();
                renderResultCard(SYSTEM.history[SYSTEM.history.length - 1]);
            }
            if (SYSTEM.won) showVictoryModal(false);
        }
    } catch(e) { console.error("Save load error", e); }
}

// Gestion Paramètres UI
function loadSettings() {
    SETTINGS.sound = localStorage.getItem('cfg_sound') === 'true';
    SETTINGS.haptic = localStorage.getItem('cfg_haptic') === 'true';
    SETTINGS.eco = localStorage.getItem('lexicore_eco') === 'true';
    SETTINGS.theme = localStorage.getItem('lexicore_theme') || 'auto';

    DOM.toggles.sound.checked = SETTINGS.sound;
    DOM.toggles.haptic.checked = SETTINGS.haptic;
    DOM.toggles.anim.checked = SETTINGS.eco;
    
    if (SETTINGS.eco) document.body.classList.add('eco-mode');
}

function setupEventListeners() {
    // Paramètres Toggles
    DOM.toggles.sound.addEventListener('change', e => {
        SETTINGS.sound = e.target.checked;
        localStorage.setItem('cfg_sound', SETTINGS.sound);
        if(SETTINGS.sound) playAudio('click');
    });

    DOM.toggles.haptic.addEventListener('change', e => {
        SETTINGS.haptic = e.target.checked;
        localStorage.setItem('cfg_haptic', SETTINGS.haptic);
        if(SETTINGS.haptic) triggerHaptic(50);
    });

    DOM.toggles.anim.addEventListener('change', e => {
        SETTINGS.eco = e.target.checked;
        localStorage.setItem('lexicore_eco', SETTINGS.eco);
        document.body.classList.toggle('eco-mode', SETTINGS.eco);
    });

    DOM.toggles.theme.addEventListener('change', e => {
        SETTINGS.theme = e.target.checked ? 'dark' : 'light';
        localStorage.setItem('lexicore_theme', SETTINGS.theme);
        applyTheme(e.target.checked);
    });

    // Modales
    document.getElementById('open-settings').onclick = () => DOM.modals.settings.classList.remove('hidden');
    document.getElementById('close-settings').onclick = () => DOM.modals.settings.classList.add('hidden');
    document.getElementById('close-victory').onclick = () => DOM.modals.victory.classList.add('hidden');
    
    // Modes
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const mode = btn.dataset.mode;
            document.getElementById('archive-zone').classList.add('hidden');
            
            if (mode === 'daily' || mode === 'training') {
                startSession(mode);
                DOM.modals.settings.classList.add('hidden');
            }
        });
    });
    
    // Selecteur Archive (Date) - Simple logique d'activation
    // Pour simplifier, on n'ajoute pas de bouton dédié Archive, on utilise le date picker pour lancer
    const archivePicker = document.getElementById('archive-picker');
    archivePicker.addEventListener('change', (e) => {
        if(e.target.value) {
            startSession('archive', e.target.value);
            DOM.modals.settings.classList.add('hidden');
        }
    });

    // Share
    document.getElementById('share-btn').onclick = () => {
        const text = `LEXICORE #${SYSTEM.targetDateId} 🔓\n${SYSTEM.history.length} essais | ${document.getElementById('stat-time').innerText}\nTemp. Max: ${SYSTEM.history[SYSTEM.history.length-1].temp}°`;
        if (navigator.share) navigator.share({ text }).catch(()=>{});
        else { navigator.clipboard.writeText(text); showToast("Copié !"); }
    };
}

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
    }
}

// Boot
window.addEventListener('load', initLexicore);

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Lexicore System: Secure & Offline Ready'))
        .catch(console.error);
}