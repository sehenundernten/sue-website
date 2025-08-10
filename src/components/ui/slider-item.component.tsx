import { Member } from "@/types/member";
import { CarouselItem } from "./carousel";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export default function MemberSliderItem({ member }: { member: Member }) {
  return (
    <CarouselItem
      className="basis-1/3 flex flex-col gap-6 items-center"
      key={member.name}
    >
      <Image
        className="object-cover"
        src={member.image}
        alt=""
        width={180}
        height={250}
      />
      <div className="flex flex-col gap-2 text-center h-full justify-between">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-lg break-words whitespace-pre-wrap">{member.role}</p>
        <div>
          <Button variant="link">
            <Link href={member.link}>
              {member.link.split("https://www.").pop()}
            </Link>
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
}
