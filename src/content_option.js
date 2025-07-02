import mainImage from "./assets/images/main.jpg";
import bulletHeartCover from "./assets/images/bulletHeartCover.png";
import buttonTimeCover from "./assets/images/buttonTimeCover.png";
import redactionSystemJFrame from "./assets/images/redactionSystemJFrame.png";
import thmCerts from "./assets/images/thmCerts.jpg";
import netAcadCerts from "./assets/images/netAcadCerts.jpg";
import hackingPage from "./assets/images/hackingPage.jpg";
import kpbi from "./assets/images/kpbi.jpg";
import { useTranslation } from "react-i18next";

const useContent = () => {
    const { t } = useTranslation();

    const logotext = t("logotext");

    const meta = {
        title: t("meta.title"),
        description: t("meta.description"),
    };

    const introdata = {
        title: t("intro.title"),
        animated: {
            first: t("intro.animated.first"),
            second: t("intro.animated.second"),
            third: t("intro.animated.third"),
            fourth: t("intro.animated.fourth"),
            fifth: t("intro.animated.fifth"),
            sixth: t("intro.animated.sixth"),
        },
        description: t("intro.description"),
        your_img_url: mainImage,
    };

    const dataabout = {
        title: t("about.title"),
        aboutme: t("about.paragraphs", { returnObjects: true }),
    };

    const worktimeline = t("timeline", { returnObjects: true });

    const skills = t("skills", { returnObjects: true });

    const services = t("services", { returnObjects: true });

    const dataportfolio = t("portfolio", { returnObjects: true }).map((item, index) => ({
        img: [
            bulletHeartCover,
            hackingPage,
            buttonTimeCover,
            kpbi,
            redactionSystemJFrame,
            netAcadCerts,
            thmCerts,
        ][index],
        description: item.description,
        link: item.link,
    }));

    const contactConfig = {
        YOUR_EMAIL: t("contact.email"),
        description: t("contact.description"),
        YOUR_SERVICE_ID: "service_fswnqun",
        YOUR_TEMPLATE_ID: "template_8eaapz8",
        YOUR_USER_ID: "NekABFIA732YwgP0H",
    };

    const socialprofils = {
        github: t("social.github"),
        facebook: t("social.facebook"),
        linkedin: t("social.linkedin"),
    };

    const section = {
        portfolio: t("section.portfolio"),
        contact: t("section.contact"),
        contactme: t("section.contactme"),
        about: t("section.about"),
        touch: t("section.touch"),
        socials: t("section.socials"),
        certs: t("section.certs"),
        skills: t("section.skills"),
        lookingfor: t("section.lookingfor"),
        menuhome: t("section.menuhome"),
        menuportfolio: t("section.menuportfolio"),
        menuabout: t("section.menuabout"),
        menucontact: t("section.menucontact"),
        emailname: t("section.emailname"),
        emailemail: t("section.emailemail"),
        emailmessage: t("section.emailmessage"),
        view: t("section.view"),
        send: t("section.send")
    };

    return {
        meta,
        dataabout,
        dataportfolio,
        worktimeline,
        skills,
        services,
        introdata,
        contactConfig,
        socialprofils,
        logotext,
        section,
    };
};

export default useContent;
