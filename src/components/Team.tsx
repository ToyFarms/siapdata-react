import { team } from "@/lib/dataTeam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {team.map((t) => (
        <Card key={t.name}>
          <CardHeader>
            <CardTitle className="text-nowrap">{t.name}</CardTitle>
            <CardDescription>{t.pos}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={t.avatar}
              className="rounded-[2rem] outline outline-black/20"
            />
          </CardContent>
          <CardFooter className="flex gap-2 overflow-x-scroll">
            <a href={t.social.linkedIn}>
              <FaLinkedin size={24} />
            </a>
            <a href={t.social.instagram}>
              <FaInstagram size={24} />
            </a>
            <a href={t.social.facebook}>
              <FaFacebookSquare size={24} />
            </a>
            <a href={t.social.twitter}>
              <FaTwitter size={24} />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
