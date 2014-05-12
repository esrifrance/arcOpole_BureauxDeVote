/*global dojo */
/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
 dojo.provide("js.Config");
 dojo.declare("js.Config", null, {
    // Ce fichier contient les paramètres de configuration du modèle d'application "Bureau de vote"
    //
    // Modifiez ce fichier pour :
    //
    // 1.  Définir le nom de l'application                  - [ Mot(s) clé à rechercher : ApplicationName ]
    // 2.  Définir le l'URL de l'icône de l'application     - [ Mot(s) clé à rechercher : ApplicationIcon ]
    // 3.  Définir le message d'accueil                     - [ Mot(s) clé à rechercher : SplashScreenMessage ]
    // 4.  Définir l'URL de la page d'aide                  - [ Mot(s) clé à rechercher : HelpURL ]
    //
    // 5.  Gérer les fonds de plan                    - [ Mot(s) clé à rechercher : BaseMapLayers ]
    // 6.  Définir l'étendue par défaut               - [ Mot(s) clé à rechercher : DefaultExtent ]
    //
    // 7.  Choisir d'utiliser ou non une WebMap                - [ Mot(s) clé à rechercher : UseWebmap <true/false> ]
    // 8.  Définit la WebMapId, si vous utilisez une WebMap    - [ Mot(s) clé à rechercher : WebMapId ]
    // 9.  Ou, si vous utilisez des Map Services :
    // 9a. Définir les URL des services de données             - [ Mot(s) clé à rechercher : PollLayer, PollMobileLayer, PrecinctLayer, PrecinctOfficeLayer, PollingCommentsLayer, ReferenceOverlayLayer ]
    // 9b. Paramétrer l'infobulle                     - [ Mot(s) clé à rechercher : InfoWindowHeader, InfoWindowContent ]
    // 9c. Paramétrer la popup                        - [ Mot(s) clé à rechercher : InfoPopupFieldsCollection, ShowCommentsTab ]
    // 9d. Personnaliser la taille de la popup        - [ Mot(s) clé à rechercher : InfoPopupHeight, InfoPopupWidth ]
    // 9e. Personnaliser le formatage des données     - [ Mot(s) clé à rechercher : ShowNullValueAs, FormatDateAs ]
    //
    // 10. Personnaliser les paramètres du service de géocodage         - [ Mot(s) clé à rechercher : LocatorSettings ]
    //
    // 11. Définir l'adresse du service de géométries                   - [ Mot(s) clé à rechercher : GeometryService ]
    //
    // 12. Personnaliser le calcul d'itinéraire  - [ Mot(s) clé à rechercher : RouteServiceURL, RouteColor, RouteWidth ]
    // 12a.Choisir les bureaux de vote pour lesquels l'itinéraire doit être calculé  
    //                                           - [ Mot(s) clé à rechercher : GenerateRouteToNonDesignatedPollingPlace <true/false> ]
    // 13. Configurer les informations qui s'afficheront dans les onglets et les volets
    //                                                - [ Mot(s) clé à rechercher : InfoBoxWidth, PollingPlaceTabData, ElectedOfficialsTabData ]
    //
    // 14. Définir l'URL pour le partage               - [ Mot(s) clé à rechercher : FacebookShareURL, TwitterShareURL, ShareByMailLink ]
    // 14a.Pour changer le service de raccourcissement d'URL
    //     Définir l'URL pour le nouveau service            - [ Mot(s) clé à rechercher : MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    //
    //

    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRES GENERAUX
    // ------------------------------------------------------------------------------------------------------------------------
    // Définir le nom de l'application
    ApplicationName: "Bureau de vote",

    // Définir le l'URL de l'icône de l'application
    ApplicationIcon: "images/EPPIcon.png",

    // Définir le message d'accueil - Le texte qui s'affiche au lancement de l'application
    SplashScreenMessage: "<b>Bureaux de vote</b> <br/> <hr/> <br/> L'application <b>Bureaux de vote</b> offre un moyen simple pour les électeurs de trouver leur bureau de vote.<br /><br />Lorsqu'un électeur saisit son adresse, l'application met en évidence le lieu de vote approprié ainsi que le bureau de vote associé. Des informations pertinentes sur ce lieu de vote sont également présentées dans une série d'onglets au bas de l'application.<br/><br/>Pour toutes informations supplémentaires sur le fonctionnement de cette application référez vous à l'aide disponible en haut à droite de votre fenêtre. <br/><br/>",

    // Définir l'URL de la page d'aide
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRES DES FONDS DE PLAN
    // ------------------------------------------------------------------------------------------------------------------------
    // Définir les services de fonds de plan
    // Note importante :  Tous les fonds de plan doivent avoir la même projection. Cette projection sera celle attribuée à toutes les couches affichées
    BaseMapLayers: [{
        Key: "parcelMap",
        ThumbnailSource: "images/parcelMap.png",
        Name: "Topo Map",
        MapURL: "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"
    }, {
        Key: "hybridMap",
        ThumbnailSource: "images/imageryHybrid.png",
        Name: "Imagerie",
        MapURL: "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
    }],

    // Etendue par défaut. Le séparateur est la virgule. ne supprimez pas la dernière virgule
    DefaultExtent: "245959, 6244369, 252779, 6250164",	
	
    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRES DES SERVICES DE DONNEES
    // ------------------------------------------------------------------------------------------------------------------------
    // Les WebMaps ne sont pas supportées avec la version 10.2 de l'application de Bureaux de vote. Utilisez plutôt les services de données (MapServices). Ne changez pas "UseWebmap" et "WebMapId".
    UseWebmap: false,

    WebMapId: "",

    // Définir les options suivantes pour chacun des MapServices de données
    PollLayer: {
        ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/0",
        Image: "images/pollingPlace.png",
        UseImage: true,
        PrimaryKeyForPolling: "${ID_LV}"
    },
    PollMobileLayer: {
        ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/0",
        Image: "images/pollingPlace.png",
        UseImage: true,
        PrimaryKeyForPolling: "${ID_LV}"
    },

    PrecinctLayer: {
        ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/1",
        Color: "#00ff00",
        Alpha: 0.75,
        UseColor: false
    },

    PrecinctOfficeLayer: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/4",

    // Définir le champ identifiant pour les bureaux de votes
    PrecinctID: "${NUM_BUR}",

    PollingCommentsLayer: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/3",
    // Définir la clé primaire pour la table des commentaires
    PrimaryKeyForComments: "${ID_LV}",

    // ServiceUrl is the REST end point for the reference overlay layer
    // DisplayOnLoad setting this will show the reference overlay layer on load
    ReferenceOverlayLayer: {
        ServiceUrl: "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer",
        DisplayOnLoad: false
    },


    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRES DE L'INFOBULLE
    // ------------------------------------------------------------------------------------------------------------------------
    // L'infobulle est une petite fenêtre de deux lignes qui sera affichée sur les entités sélectionnées
    // Paramatrez le titre de l'infobulle avec du texte et/ou la valeur d'un champ
    InfoWindowHeader: "${LIEU_VOTE}",

    // Paramatrez le contenu de l'infobulle avec du texte et/ou la valeur d'un champ
    InfoWindowContent: "${ADRESSE}",

    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRES DE LA POPUP DES LIEUX DE VOTE
    // ------------------------------------------------------------------------------------------------------------------------
    // La Popup est une fenêtre qui affiche les informations détaillées sur une entité électionnée
    // Définissez le contenu à afficher dans la Popup : labels, valeurs de champs, types de champs et format
    InfoPopupFieldsCollection: [{
        DisplayText: "Adresse:",
        FieldName: "${ADRESSE}"
    }, {
		DisplayText: "1: Bureau n°",
		FieldName: "${B1}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 2:",
		FieldName: "${B2}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 3:",
		FieldName: "${B3}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 4:",
		FieldName: "${B4}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 5:",
		FieldName: "${B5}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 6:",
		FieldName: "${B6}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 7:",
		FieldName: "${B7}",
		NoNullDisplay: true
	}, {
		DisplayText: "Bureau 8:",
		FieldName: "${B8}",
		NoNullDisplay: true
	}],

    // Définir ce paramètre à "true" si vous voulez montrer l'onglet "Commentaires" dans la popup
    ShowCommentsTab: false,


    // Configurer la taille de la popup - définir la hauteur et la largeur maxi en pixels (ne fonctionne pas avec les popup avec des onglets)
    InfoPopupHeight: 260,
    InfoPopupWidth: 330,

    // Choisissez comment afficher les valeurs null ou vides
    ShowNullValueAs: "-",

    // Définir comment afficher les dates
    FormatDateAs: "dd MM yyyy",


    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRES DU SERVICE DE GEOCODAGE
    // ------------------------------------------------------------------------------------------------------------------------

    // Définir les parètres du service de géocodage
	// Service de géocodage par défaut
    LocatorSettings: {
        DefaultLocatorSymbol: "images/RedPushpin.png",
        SymbolSize: {
            width: 25,
            height: 25
        },
        DefaultValue: "120 Rue Gallieni",
		DefaultCity: "Boulogne-Billancourt",
        LocatorParameters: ["SingleLine"],
        LocatorFields: ["Address", "City", "State"],
        LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        CandidateFields: "Loc_name, Score, Match_addr",
        FieldName: "${Match_addr}",
        LocatorFieldName: 'Loc_name',
        LocatorFieldValues: ["FRA.StreetName", "FRA.PointAddress", "FRA.StreetAddress", "POI"],
        AddressMatchScore: 90,
        LocatorRippleSize: 40,
		UseDefault: true,
		UseSuggestions: true,
		SuggestCenterX: 249379,
		SuggestCenterY: 6246991,
		SuggestDistance: 10000,
		BaseMapWkid: 102100,
		SuggestTimeout: 1000
    },

	// Service de géocodage sur le service en ligne Esri France sur la BD Adresse
	// LocatorSettings: {
        // DefaultLocatorSymbol: "images/RedPushpin.png",
        // SymbolSize: {
            // width: 25,
            // height: 25
        // },
		// Token: "ICI VOTRE CLE",
        // DefaultValue: "20 Avenue Andre Morizet",
		// DefaultCity: "Boulogne-Billancourt",
        // LocatorParameters: ["SingleLine"],
        // LocatorFields: ["Address", "City", "Postal"],
        // LocatorURL: "http://tasks.esrifrance.fr/arcgis/rest/services/GEOCODAGE/Geocodage_BDAdresse_France/GeocodeServer",
        // CandidateFields: "Loc_name, Score, Match_addr",
        // FieldName: "${Match_addr}",
        // LocatorFieldName: 'Loc_name',
        // LocatorFieldValues: ["2_AdresseInter", "3_Voie"],
        // AddressMatchScore: 75,
        // LocatorRippleSize: 40,
		// UseDefault: true
    // },
	
    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRAGE DU SERVICE DE GEOMETRIES
    // ------------------------------------------------------------------------------------------------------------------------
    // Définir l'URL du service de géométries
    GeometryService: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",


    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMTRAGE DU SERVICE DE CALCUL D'ITINERAIRES
    // ------------------------------------------------------------------------------------------------------------------------
    // Définir l'IRM du service de calcul d'itinéraires (network analyst), to désactiver le calcul d'itinéraire, mettez à jour la variable "ShowDirection" variable dans la section "PollingPlaceTabData".
    RouteServiceURL: "http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",

    // Définir la coucleur utilisée pour représenter l'itinéraire
    RouteColor: "#7F7FFE",

    // Définir l'épaisseur du trait
    RouteWidth: 6,

    // Choisissez les bureaux de vote pour lesquels l'itinéraire doit être calculé
    // Si cette variable est à "true", alors l'itinéraire sera calculé pour n'importe quel bureau de vote. Sinon, seul l'itinéraire pour le bureau de vote rattaché sera caclculé
    GenerateRouteToNonDesignatedPollingPlace: false,

    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMETRAGES POUR LES ONGLETS ET VOLETS DE LA BARRE DES LIEUX DE VOTES
    // ------------------------------------------------------------------------------------------------------------------------
    // Définir la largeur de chaque volet
    InfoBoxWidth: 422,


    // Définir les informations à afficher dans l'onglet "Lieu de vote"
    PollingPlaceTabData: {
        DetailsBox: {
            HeaderColor: "#303030",
            Title: "<b>Détails</b>",
            Data: [{
                DisplayText: "Nom:",
                FieldName: "${LIEU_VOTE}"
            }, {
                DisplayText: "Adresse:",
                FieldName: "${ADRESSE}"
            }]
        },
        DirectionBox: {
            HeaderColor: "#303030",
            Title: "<b>Itineraire</b>",
            ShowDirection: true
        }
    },

    // Gestion de l'affichaeg multiple (optionnel)
    // Définir les informations qui doivent s'afficher dans l'onglet "Informations"
    ElectedOfficialsTabData: {
        CountyLayer: {
            ServiceUrl: "http://services.arcgis.com/d3voDfTFbHOCRwVR/ArcGIS/rest/services/BureauDeVoteBoulogneBillancourt/FeatureServer/2",
            HeaderColor: "#303030",
            Title: "<b>Ville</b>",
            Data: [{
                DisplayText: "Code postal:",
                FieldName: "${CODE_POSTAL}"
            }, {
                DisplayText: "Nom:",
                FieldName: "${NOM}"
            }, {
                DisplayText: "Site Web:",
                FieldName: "${URL_SITE}"
            }]
        }
    },

    // Indiquer les noms des champs de la base de données
    // Note: DateFieldName fait référence au champs de type date.
    // Tous les autres attributs font référence à des chamsp de type texte.
    DatabaseFields: {
        PollingIdFieldName: "ID_LV",
        CommentsFieldName: "COMMENTAIRES",
        DateFieldName: "DATE"
    },

    // Définir les champs des commentaires
    CommentsInfoPopupFieldsCollection: {
        Submitdate: "${DATE}",
        Comments: "${COMMENTAIRES}"
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // PARAMEATRGE POUR LE PARTAGE
    // ------------------------------------------------------------------------------------------------------------------------
    // Définir l'URL pour le service de raccourcissement d'URL et les URL pour les réseaux sociaux
    MapSharingOptions: {
        TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=AAAA&apiKey=BBBB&uri=${0}&format=json",
        TinyURLResponseAttribute: "data.url",

        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Election%20Polling%20Place",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Election%20Polling%20Place ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    }
});
