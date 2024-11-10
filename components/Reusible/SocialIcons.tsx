import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const SocialIcons = ({ color, className }: { color?: string; className?: string }) => {
  const socialMediaList = [
    {
      id: "6047077124",
      title: "Woman Franch в Instagram",
      imageSrc: <FaInstagram className={twMerge("text-2xl", color)} />,
      link: "https://www.instagram.com/woman.franch",
    },
    {
      id: "6717940851",
      title: "Приєднуйтеся до нашої спільноти на Facebook",
      imageSrc: <FaFacebook className={twMerge("text-2xl", color)} />,
      link: "https://www.facebook.com/womanfranch/",
    },
    {
      id: "6298302662",
      title: "Дивіться відео-історії успіху та інтерв'ю з лідерами",
      imageSrc: <FaYoutube className={twMerge("text-2xl", color)} />,
      link: "https://www.youtube.com/@womanfranch",
    },
    {
      id: "8263234237",
      title:
        "Приєднуйся до каналу про Жіночий бізнес в Telegram. Канал для амбітних жінок – які мріють про власний бізнес та реалізацію",
      imageSrc: <FaTelegram className={twMerge("text-2xl", color)} />,
      link: "https://t.me/WomanFranch",
    },
  ];

  return (
    <div className={twMerge("flex space-x-1 gap-1 justify-center items-center", className)}>
      {socialMediaList.map((social) => {
        return (
          <Link
            key={social.id}
            href={social.link}
            target="_blank"
            title={social.title}
            className="hover:scale-105 opacity-90 hover:opacity-100">
            {social.imageSrc}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
