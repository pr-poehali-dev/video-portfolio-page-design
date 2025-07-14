import { useState } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface VideoItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  price: string;
  clientName: string;
  clientAvatar: string;
  clientChannel: string;
  videoUrl: string;
}

const videoData: VideoItem[] = [
  {
    id: 1,
    title: "Рекламный ролик",
    category: "РЕКЛАМА",
    thumbnail: "img/0a474613-e72f-4d58-a9a9-7fa946ac6284.jpg",
    price: "25 000 ₽",
    clientName: "@tech_channel",
    clientAvatar: "img/bcf9ced0-5a68-4c92-9dd9-8b4ab132a804.jpg",
    clientChannel: "https://youtube.com/@tech_channel",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Обучающее видео",
    category: "ОБРАЗОВАНИЕ",
    thumbnail: "img/0a474613-e72f-4d58-a9a9-7fa946ac6284.jpg",
    price: "15 000 ₽",
    clientName: "@learn_hub",
    clientAvatar: "img/bcf9ced0-5a68-4c92-9dd9-8b4ab132a804.jpg",
    clientChannel: "https://youtube.com/@learn_hub",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Промо видео",
    category: "МАРКЕТИНГ",
    thumbnail: "img/0a474613-e72f-4d58-a9a9-7fa946ac6284.jpg",
    price: "30 000 ₽",
    clientName: "@brand_studio",
    clientAvatar: "img/bcf9ced0-5a68-4c92-9dd9-8b4ab132a804.jpg",
    clientChannel: "https://youtube.com/@brand_studio",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Корпоративное видео",
    category: "КОРПОРАТИВ",
    thumbnail: "img/0a474613-e72f-4d58-a9a9-7fa946ac6284.jpg",
    price: "50 000 ₽",
    clientName: "@corp_media",
    clientAvatar: "img/bcf9ced0-5a68-4c92-9dd9-8b4ab132a804.jpg",
    clientChannel: "https://youtube.com/@corp_media",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Музыкальный клип",
    category: "МУЗЫКА",
    thumbnail: "img/0a474613-e72f-4d58-a9a9-7fa946ac6284.jpg",
    price: "40 000 ₽",
    clientName: "@music_artist",
    clientAvatar: "img/bcf9ced0-5a68-4c92-9dd9-8b4ab132a804.jpg",
    clientChannel: "https://youtube.com/@music_artist",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Анимационный ролик",
    category: "АНИМАЦИЯ",
    thumbnail: "img/0a474613-e72f-4d58-a9a9-7fa946ac6284.jpg",
    price: "35 000 ₽",
    clientName: "@animation_pro",
    clientAvatar: "img/bcf9ced0-5a68-4c92-9dd9-8b4ab132a804.jpg",
    clientChannel: "https://youtube.com/@animation_pro",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openTelegram = () => {
    window.open('https://t.me/Framix_Manager', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="py-8 px-6 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white tracking-tight">VIDEO PORTFOLIO</h1>
          <p className="text-gray-400 mt-2 font-light">Профессиональное видеопроизводство</p>
        </div>
      </header>

      {/* Video Gallery */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoData.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Icon 
                      name="Play" 
                      size={48} 
                      className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="mt-4 p-6 bg-gray-800 border border-gray-700 rounded-2xl transform transition-all duration-300 group-hover:shadow-2xl group-hover:bg-gray-750">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-white">{video.title}</h3>
                    <span className="text-sm font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{video.clientName}</span>
                    <span className="text-lg font-bold text-white">{video.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogOverlay className="bg-black bg-opacity-95" />
        <DialogContent className="max-w-[90vw] w-full h-[80vh] bg-gray-800 p-0 overflow-hidden rounded-3xl border border-gray-700" style={{aspectRatio: '16/9'}}>
          {selectedVideo && (
            <div className="flex h-full">
              {/* Video Player - Left Side */}
              <div className="bg-black flex items-center justify-center rounded-l-3xl" style={{aspectRatio: '16/9', width: 'calc(100% - 320px)'}}>
                <iframe
                  src={selectedVideo.videoUrl}
                  className="w-full h-full rounded-l-3xl"
                  frameBorder="0"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>
              
              {/* Info Panel - Right Side */}
              <div className="w-80 bg-gray-800 p-8 flex flex-col justify-between rounded-r-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                    {selectedVideo.category}
                  </h2>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={selectedVideo.clientAvatar} alt={selectedVideo.clientName} />
                      <AvatarFallback className="bg-gray-700 text-white">{selectedVideo.clientName.charAt(1)}</AvatarFallback>
                    </Avatar>
                    <a 
                      href={selectedVideo.clientChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {selectedVideo.clientName}
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-white">
                    {selectedVideo.price}
                  </div>
                  
                  {/* Telegram Button */}
                  <Button 
                    onClick={openTelegram}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-xl py-3 flex items-center justify-center gap-2"
                  >
                    <Icon name="MessageCircle" size={20} />
                    Связаться в Telegram
                  </Button>
                  
                  <Button 
                    onClick={() => setSelectedVideo(null)}
                    className="w-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 rounded-xl py-3"
                  >
                    Закрыть
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;