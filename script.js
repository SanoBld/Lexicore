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

/* --- CONFIG & STATE --- */
const ELEMENTS = {
    animToggle: document.getElementById('anim-toggle'),
    themeToggle: document.getElementById('theme-toggle'),
    settingsModal: document.getElementById('settings-modal'),
    victoryModal: document.getElementById('victory-modal'),
    input: document.getElementById('user-input'),
    form: document.getElementById('guess-form'),
    historyList: document.getElementById('best-list'),
    resultCard: document.getElementById('current-guess-card'),
    currentWord: document.getElementById('current-word'),
    currentTemp: document.getElementById('current-temp'),
    currentBar: document.getElementById('current-bar'),
    tempIndicator: document.getElementById('temp-indicator'),
    toast: document.getElementById('toast-message'),
    
    // Stats Victory
    statAttempts: document.getElementById('stat-attempts'),
    statTime: document.getElementById('stat-time'),
    statScore: document.getElementById('stat-score'),
    victoryWord: document.getElementById('victory-word-display')
};

/* --- 1. SYSTEME --- */
function initSystem() {
    // Theme
    const savedTheme = localStorage.getItem('lexicore_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        ELEMENTS.themeToggle.checked = false;
    } else {
        ELEMENTS.themeToggle.checked = true;
    }

    // Eco Mode (Inversé: checked = Eco off, unchecked = Eco on. Ici on va faire: Checked = Eco ON pour simplifier l'UI)
    // Dans le HTML, j'ai mis "Mode Éco". Donc si coché => Eco Mode Active.
    const ecoEnabled = localStorage.getItem('lexicore_eco') === 'true';
    ELEMENTS.animToggle.checked = ecoEnabled;
    updateEcoState(ecoEnabled);

    // Events Settings
    document.getElementById('open-settings').addEventListener('click', () => ELEMENTS.settingsModal.classList.remove('hidden'));
    document.getElementById('close-settings').addEventListener('click', () => ELEMENTS.settingsModal.classList.add('hidden'));
    document.getElementById('backdrop-settings').addEventListener('click', () => ELEMENTS.settingsModal.classList.add('hidden'));
    
    // Events Victory
    document.getElementById('close-victory').addEventListener('click', () => ELEMENTS.victoryModal.classList.add('hidden'));
    document.getElementById('backdrop-victory').addEventListener('click', () => ELEMENTS.victoryModal.classList.add('hidden'));
    document.getElementById('share-btn').addEventListener('click', shareResult);

    // Toggles
    ELEMENTS.themeToggle.addEventListener('change', (e) => {
        if (!e.target.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('lexicore_theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('lexicore_theme', 'dark');
        }
    });

    ELEMENTS.animToggle.addEventListener('change', (e) => {
        const isEco = e.target.checked;
        localStorage.setItem('lexicore_eco', isEco);
        updateEcoState(isEco);
    });
}

function updateEcoState(isEco) {
    if (isEco) document.body.classList.add('eco-mode');
    else document.body.classList.remove('eco-mode');
}

/* --- 2. MOTEUR DU JEU --- */
function getDaySeed() {
    const now = new Date();
    // Reset à minuit locale
    return Math.floor((now.setHours(0,0,0,0) - new Date('2023-01-01').getTime()) / 86400000);
}

function getDailyWord() {
    const seed = getDaySeed();
    // Simple PRNG basé sur le seed
    const x = Math.sin(seed * 9999) * 10000;
    const index = Math.floor((x - Math.floor(x)) * dictionary.length);
    return dictionary[index];
}

const currentDayId = getDaySeed();
document.getElementById('day-number').innerText = currentDayId;
const targetWord = getDailyWord();

/* --- 3. LOGIQUE JEU & STATS --- */
const STORAGE_KEY = `lexicore_save_${currentDayId}`;
const META_KEY = `lexicore_meta_${currentDayId}`; // Pour le timer

let gameState = {
    history: [],
    startTime: null,
    endTime: null,
    won: false
};

function loadGame() {
    // Charger Historique
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) gameState.history = JSON.parse(stored);
        
        const meta = JSON.parse(localStorage.getItem(META_KEY) || '{}');
        gameState.startTime = meta.start || null;
        gameState.endTime = meta.end || null;
        gameState.won = meta.won || false;

    } catch (e) { console.error("Save error", e); }

    if (gameState.history.length > 0) {
        updateHistoryUI();
        renderResultCard(gameState.history[gameState.history.length - 1]);
    }
    
    if (gameState.won) {
        showVictoryModal(false); // false = pas d'anim confetti au reload
    }
}

function saveGame() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState.history));
    localStorage.setItem(META_KEY, JSON.stringify({
        start: gameState.startTime,
        end: gameState.endTime,
        won: gameState.won
    }));
}

/* --- 4. CORE MATHS --- */
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

function calculateScore(word) {
    if (word === targetWord) return 100.0;
    const dist = levenshtein(word, targetWord);
    const maxLen = Math.max(word.length, targetWord.length);
    // Formule ajustée pour être plus sévère
    let score = (maxLen - dist) / maxLen;
    // Mise à l'échelle pour avoir des décimales intéressantes
    return Math.max(0, score * 100).toFixed(2); 
}

/* --- 5. INTERACTIONS --- */
ELEMENTS.form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (gameState.won) {
        showVictoryModal(false);
        return;
    }

    let inputVal = ELEMENTS.input.value.trim().toUpperCase();
    if (!inputVal) return;
    
    // Normalisation
    inputVal = inputVal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Vérif Dico (Approximative si mot pas trouvé exact)
    let bestCandidate = inputVal;
    if (!dictionary.includes(inputVal)) {
        // Optionnel : Trouver le plus proche pour corriger ? 
        // Pour l'instant on rejette si trop loin
        showToast("Mot inconnu dans la base", true);
        return;
    }

    // Start Timer if first guess
    if (!gameState.startTime) {
        gameState.startTime = Date.now();
    }

    // Check Duplicate
    if (gameState.history.find(h => h.word === bestCandidate)) {
        showToast(`Déjà joué : ${bestCandidate}`);
        ELEMENTS.input.value = '';
        return;
    }

    const score = parseFloat(calculateScore(bestCandidate));
    
    const entry = { word: bestCandidate, temp: score, time: Date.now() };
    gameState.history.push(entry);
    
    // Win Condition
    if (score >= 100) {
        gameState.won = true;
        gameState.endTime = Date.now();
        saveGame();
        renderResultCard(entry);
        updateHistoryUI();
        ELEMENTS.input.value = '';
        setTimeout(() => showVictoryModal(true), 800); // Délai pour voir la barre se remplir
    } else {
        saveGame();
        renderResultCard(entry);
        updateHistoryUI();
        ELEMENTS.input.value = '';
    }
});

/* --- 6. RENDERING --- */
function getTempColor(t) {
    if (t < 20) return 'var(--cold-color)';
    if (t < 40) return 'var(--neutral-color)';
    if (t < 70) return 'var(--warm-color)';
    if (t < 99) return 'var(--hot-color)';
    return 'var(--win-color)';
}

function getEmoji(t) {
    if (t < 20) return '❄️';
    if (t < 40) return '💧';
    if (t < 70) return '🔥';
    if (t < 99) return '🌋';
    return '💎';
}

function showToast(msg, error = false) {
    ELEMENTS.toast.innerText = msg;
    ELEMENTS.toast.style.background = error ? 'var(--burn-color)' : 'var(--text-primary)';
    ELEMENTS.toast.style.color = error ? 'white' : 'var(--bg-color)';
    ELEMENTS.toast.classList.remove('hidden');
    setTimeout(() => ELEMENTS.toast.classList.add('hidden'), 2500);
}

function renderResultCard(data) {
    ELEMENTS.resultCard.classList.remove('hidden');
    
    ELEMENTS.currentWord.innerText = data.word;
    ELEMENTS.currentTemp.innerText = data.temp + "°";
    ELEMENTS.tempIndicator.innerText = getEmoji(data.temp);
    
    const color = getTempColor(data.temp);
    ELEMENTS.currentTemp.style.color = color;
    ELEMENTS.resultCard.style.borderColor = color;
    ELEMENTS.currentBar.style.background = color;
    
    // Animation barre
    ELEMENTS.currentBar.style.width = '0%';
    setTimeout(() => {
        ELEMENTS.currentBar.style.width = data.temp + '%';
    }, 50);
}

function updateHistoryUI() {
    ELEMENTS.historyList.innerHTML = '';
    // Tri : Le plus chaud en haut
    const sorted = [...gameState.history].sort((a, b) => b.temp - a.temp);
    
    sorted.forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = 'guess-item';
        const color = getTempColor(item.temp);
        li.style.borderLeftColor = color;
        
        // Highlight top 1
        if(idx === 0) li.style.background = `linear-gradient(90deg, ${color}11, transparent)`;

        li.innerHTML = `
            <span class="guess-word">${item.word}</span>
            <span class="guess-temp" style="color:${color}">${item.temp}°</span>
        `;
        ELEMENTS.historyList.appendChild(li);
    });
}

/* --- 7. VICTOIRE & STATS --- */
function formatTime(ms) {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}m ${s}s`;
}

function showVictoryModal(animate) {
    const duration = gameState.endTime - gameState.startTime;
    const attempts = gameState.history.length;
    
    // Calcul score "Skill" (Arbitraire : Moins de temps + Moins d'essais = Plus de points)
    // Base 10000. -100 par essai. -1 par seconde.
    let skillScore = 10000 - (attempts * 100) - (Math.floor(duration/1000));
    if (skillScore < 0) skillScore = 100;

    ELEMENTS.victoryWord.innerText = targetWord;
    ELEMENTS.statAttempts.innerText = attempts;
    ELEMENTS.statTime.innerText = formatTime(duration);
    ELEMENTS.statScore.innerText = skillScore;

    ELEMENTS.victoryModal.classList.remove('hidden');

    if (animate && !document.body.classList.contains('eco-mode')) {
        confettiEffect();
    }
}

function confettiEffect() {
    const colors = ['#00cec9', '#fdcb6e', '#e17055', '#2ecc71', '#6c5ce7'];
    for(let i=0; i<60; i++) {
        const d = document.createElement('div');
        d.style.cssText = `
            position: fixed; left: ${50 + (Math.random()*20 - 10)}%; top: 50%;
            width: 8px; height: 8px; background: ${colors[Math.floor(Math.random()*colors.length)]};
            border-radius: 50%; pointer-events: none; z-index: 9999;
            transition: transform 1s ease-out, opacity 1s;
        `;
        document.body.appendChild(d);
        
        // Explosion
        setTimeout(() => {
            const angle = Math.random() * Math.PI * 2;
            const velocity = 100 + Math.random() * 200;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            d.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
            d.style.opacity = 0;
        }, 10);

        setTimeout(() => d.remove(), 1100);
    }
}

function shareResult() {
    const attempts = gameState.history.length;
    const time = ELEMENTS.statTime.innerText;
    const text = `LEXICORE #${currentDayId}\n🚀 Trouvé en ${attempts} coups !\n⏱️ Chrono : ${time}\n\nToi aussi relève le défi : [TonLienGitHubIci]`;
    
    if (navigator.share) {
        navigator.share({ title: 'LEXICORE', text: text }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text);
        showToast("Résultat copié !", false);
    }
}

// Start
initSystem();
loadGame();