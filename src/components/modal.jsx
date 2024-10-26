import Image from "next/image";
import background from "../../public/bg1.jpg";

export const Modal = ({ onClose }) => {
  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 bg-black bg-opacity-60 w-full h-screen flex justify-center items-center z-[9999]"
    >
      <div className="flex flex-col w-3/4 lg:w-2/4 rounded-xl bg-gray-900">
        <Image
          src={background}
          alt="image"
          width={1000}
          height={720}
          //   className="w-full"
        />
        <div className="flex flex-col p-5 ">
          <h2 className="text-white text-lg font-bold mb-2">dibaca yaa!!</h2>
          <h2 className="text-white text-sm font-bold mb-1 ">hai sayang</h2>
          <p className="text-slate-200">
            haloo shafa najwa atau yang biasa aku sebut anaaa atau bb, waktu
            pertama kali kenal kamu, I didn&apos;t think you&apos;d become this
            important to me. Like we used to be strangers, now you&apos;re
            somebody who I can&apos;t go one day without talking to. Oh iya
            waktu aku manggil kamu pake sayang atau aku bilang kamu lucu, I mean
            it. Mungkin kamu juga uda sadar, kalau aku emang udah akhir-akhir
            ini terang-terangan nunjukin kalau aku punya rasa sama kamu, dari gc
            atau waktu kita lagi berdua aja di discord. Aku jatuh cinta sama
            personality kamu, character kamu, cara pola pikir kamu yang selalu
            ngebuat aku kayak &#34;WHOAHH&#34;, dan masih banyak lagii. Kalau
            mau tau selebihnya, kamu tau harus kemana, this is how nanay express
            love.
          </p>
        </div>
      </div>
    </div>
  );
};
