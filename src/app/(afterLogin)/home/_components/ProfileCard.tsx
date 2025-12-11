import { ImageWithFallback } from '@/components/ImageWithFallback';
import profileImage from '@/../public/default-profile.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const data = {
  userName: '독서가',
  userDescription: '안녕하세요! 책 읽는 것을 좋아하는 독서가입니다.',
  userProfileImage: '#',
};

export default function ProfileCard() {
  return (
    <div className="bg-card p-8 shadow-md">
      <div className={cn(['flex', 'gap-4'])}>
        <div className="relative size-28">
          {profileImage ? (
            <Image
              fill
              src={profileImage.src}
              alt="Default Profile"
              className="bg-cover object-cover"
            />
          ) : (
            <ImageWithFallback
              src={data.userProfileImage}
              alt={data.userName}
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl">{data.userName}</div>
          <div className="text-sm">{data.userDescription}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
