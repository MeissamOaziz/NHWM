document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            pageTitle: "Disclaimers | New Horizons Wealth Management",
            backLink: "← Back to Home",
            disclaimersTitle: "Disclaimers",
            disclaimer1: "Imran Mastan is a representative of Designed Securities Ltd., and is also licensed for the sale of insurance. Imran Mastan is registered through separate organizations for each purpose and as such, you may be dealing with more than one entity depending on the services and products discussed. The name of the entity being represented should correspond to the business being conducted. Imran Mastan and New Horizons Wealth Management of Designed Securities Ltd. are separate legal entities.",
            disclaimer2: "Designed Securities Ltd. is regulated by the Canadian Investment Regulatory Organization (Canadian Investment Regulatory Organization (ciro.ca) and is a Member of the Canadian Investor Protection Fund (www.cipf.ca). Investment products are provided by Designed Securities Ltd. and include, but are not limited to, mutual funds, stocks, and bonds. Imran Mastan is registered to provide advice and solutions to clients residing in the province of Quebec and Ontario.",
            disclaimer3: "Any advice which may be given in respect of non-securities services is given by Imran Mastan solely and no such advice is given in their capacity as a registrant of Designed Securities Ltd. Canadian Investor Protection Fund (CIPF) coverage is available to CIRO Dealer Members and does not offer protection, within limits, on non-securities products not held by a Member. Non-securities related business includes, without limitation, fee-based financial planning services; estate and tax planning; tax return preparation services; advising in or selling any type of insurance product. Accordingly, Designed Securities Ltd. is not providing and does not supervise any of the above noted activities and you should not rely on Designed Securities Ltd. for any review of any non-securities services provided by Imran Mastan.",
            disclaimer4: "For insurance products, the registrant operates under the name Imran Mastan and is licensed by the Autorité des Marchés Financiers. Imran Mastan is authorized to provide insurance-related advice exclusively in the province of Quebec.",
            disclaimer5: "The Client Retention from our “numbers speak volumes” means clients who have done business with us and wanted to stay with us. Satisfied clients means clients who have been satisfied with the advice and services given to them at that period of time.",
            disclaimer6: "No information on this website shall be deemed as investment advice or a recommendation. The information provided may be gathered from sources believed to be accurate. This website is for informational and reference purposes only and is not intended to provide specific personalized advice including, without limitation, investment, financial, legal, accounting or tax advice. Please consult the appropriate professional depending on your particular circumstances. This website does not constitute an offer or solicitation in any jurisdiction in which such offer or solicitation is not authorized or to any person to whom it is unlawful to make such offer or solicitation.",
            disclaimer7: "By accessing links to external websites, you will be leaving this website, and Imran Mastan and New Horizons Wealth Management of Designed Securities Ltd. are not responsible for the information contained on these external websites. Content may not be reproduced or distributed without the consent of Imran Mastan."
        },
        fr: {
            pageTitle: "Avis de non-responsabilité | Gestion de Patrimoine Nouveaux Horizons",
            backLink: "← Retour à l'accueil",
            disclaimersTitle: "Avis de non-responsabilité",
            disclaimer1: "Imran Mastan est un représentant de Designed Securities Ltée et détient également des licences pour la vente de produits. Imran Mastan est inscrit auprès d’organismes distincts pour chacun de ces services. Ainsi, selon les produits et services abordés, vous pourriez être en relation avec plus d’une entité. Le nom de l’entité représentée devrait correspondre à l’activité exercée. Imran Mastan et Gestion de Patrimoine Nouveaux Horizons de Designed Securities Ltée sont des entités juridiques distinctes.",
            disclaimer2: "Designed Securities Ltée est réglementée par l’Organisme canadien de réglementation des investissements (Organisme canadien de réglementation des investissements – ciro.ca) et est membre du Fonds canadien de protection des épargnants (www.fcpe.ca). Les produits de placement sont offerts par Designed Securities Ltée et comprennent, sans s’y limiter, des fonds communs de placement, des actions et des obligations. Imran Mastan est autorisé à fournir des conseils et des solutions aux clients résidant dans les provinces du Québec et de l’Ontario.",
            disclaimer3: "Tout conseil donné relativement à des services non liés aux valeurs mobilières l’est uniquement par Imran Mastan, et non à titre de représentant de Designed Securities Ltée. La protection offerte par le Fonds canadien de protection des épargnants (FCPE) s’applique uniquement aux membres de l’OCRI et ne couvre pas, même de manière limitée, les produits non liés aux valeurs mobilières qui ne sont pas détenus par un membre. Les activités non liées aux valeurs mobilières incluent, sans s’y limiter, les services de planification financière à honoraires; la planification successorale et fiscale; la préparation de déclarations de revenus; les conseils ou la vente de tout produit d’assurance. Par conséquent, Designed Securities Ltée n’offre ni ne supervise aucune des activités mentionnées ci-dessus, et vous ne devez pas compter sur Designed Securities Ltée pour la révision de tout service non lié aux valeurs mobilières fourni par Imran Mastan.",
            disclaimer4: "Pour les produits d’assurance, le représentant exerce sous le nom d’Imran Mastan et détient un permis délivré par l’Autorité des Marchés Financiers. Imran Mastan est autorisé à offrir des conseils en assurance exclusivement dans la province de Québec.",
            disclaimer5: "Le taux de rétention des clients de nos « chiffres parlent d'eux-mêmes » signifie les clients qui ont fait affaire avec nous et ont souhaité rester avec nous. Les clients satisfaits sont ceux qui ont été satisfaits des conseils et des services qui leur ont été fournis à cette période.",
            disclaimer6: "Aucune information figurant sur ce site Web ne doit être interprétée comme un conseil en placement ou une recommandation. Les informations fournies peuvent provenir de sources jugées fiables. Ce site Web est destiné uniquement à des fins informatives et de référence et n’a pas pour objectif de fournir des conseils personnalisés, y compris, sans s’y limiter, des conseils en matière de placements, de finances, de droit, de comptabilité ou de fiscalité. Veuillez consulter le professionnel approprié selon votre situation particulière. Ce site ne constitue pas une offre ni une sollicitation dans une juridiction où une telle offre ou sollicitation n’est pas autorisée ou à l’égard de toute personne à qui il serait illégal de faire une telle offre ou sollicitation.",
            disclaimer7: "En accédant à des liens vers des sites Web externes, vous quittez ce site Web, et ni Imran Mastan ni Gestion de Patrimoine Nouveaux Horizons de Designed Securities Ltée ne sont responsables des informations contenues sur ces sites externes. Le contenu ne peut être reproduit ni distribué sans le consentement d’Imran Mastan."
        }
    };

    const enBtn = document.getElementById('en-btn');
    const frBtn = document.getElementById('fr-btn');
    let currentLang = localStorage.getItem('language') || 'en';

    function applyDisclaimerTranslations(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.dataset.translateKey;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (lang === 'en') {
            enBtn.classList.add('active');
            frBtn.classList.remove('active');
        } else {
            frBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }

    if (enBtn && frBtn) {
        enBtn.addEventListener('click', () => {
            currentLang = 'en';
            localStorage.setItem('language', currentLang);
            applyDisclaimerTranslations(currentLang);
        });

        frBtn.addEventListener('click', () => {
            currentLang = 'fr';
            localStorage.setItem('language', currentLang);
            applyDisclaimerTranslations(currentLang);
        });
    }

    applyDisclaimerTranslations(currentLang);
});
