import React from 'react';

export default function Modal({ setShowModal }) {
  return (
    <div className="fixed  min-h-screen inset-0  w-100 z-50  ease-in-out duration-300">
      <div
        className="bg-black fixed opacity-80 w-full h-screen"
        onClick={() => setShowModal(false)}
      />
      <div className="w-screen h-screen flex justify-center ">
        <div className="pb-56 md:w-1/2 h-1/2 md:pb-56 relative w-88 z-50  self-center ">
          <div className="w-full h-[50vh] ">
            <iframe
              title="Video Preview"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
