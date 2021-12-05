import React, { FC } from "react";

type Props = {
  className?: string;
};

export const TsIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 28 28"
    >
      <path fill="#007ACC" d="M0 14v14h28V0H0v14z"></path>
      <path
        fill="#fff"
        d="M6.192 14.093l-.009 1.146h3.644v10.356h2.578V15.24h3.645v-1.125c0-.622-.014-1.142-.031-1.155-.014-.018-2.231-.027-4.92-.023l-4.894.014-.013 1.142zM22.593 12.918a3.486 3.486 0 011.751 1.009c.258.276.64.778.671.898.01.035-1.208.853-1.946 1.31-.027.019-.134-.097-.254-.275-.36-.524-.737-.75-1.315-.79-.849-.059-1.396.386-1.391 1.128 0 .218.03.347.12.525.187.386.533.617 1.622 1.088 2.005.863 2.862 1.432 3.396 2.24.595.903.729 2.343.324 3.414-.444 1.164-1.547 1.955-3.098 2.218-.48.084-1.617.07-2.133-.023-1.125-.2-2.191-.755-2.849-1.484-.258-.284-.76-1.027-.729-1.08.014-.018.129-.089.258-.165.124-.07.596-.342 1.04-.6l.804-.466.17.249c.235.36.75.853 1.062 1.017.893.472 2.12.405 2.724-.137.258-.236.364-.48.364-.84 0-.325-.04-.467-.209-.711-.217-.312-.662-.574-1.924-1.12-1.444-.623-2.067-1.01-2.635-1.623a3.69 3.69 0 01-.77-1.4c-.106-.395-.133-1.386-.048-1.786.297-1.396 1.35-2.37 2.87-2.658.494-.093 1.64-.058 2.125.062z"
      ></path>
    </svg>
  );
};

export const EthereumIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 20 32"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="#343434"
          d="M9.785 0l-.213.729v21.154l.213.215 9.786-5.805L9.785 0z"
        ></path>
        <path fill="#8C8C8C" d="M9.785 0L0 16.293l9.785 5.805V0z"></path>
        <path
          fill="#3C3C3B"
          d="M9.785 23.957l-.12.147v7.536l.12.353 9.791-13.838-9.79 5.802z"
        ></path>
        <path
          fill="#8C8C8C"
          d="M9.785 31.993v-8.036L0 18.155l9.785 13.838z"
        ></path>
        <path
          fill="#141414"
          d="M9.785 22.098l9.785-5.805-9.785-4.463v10.268z"
        ></path>
        <path fill="#393939" d="M0 16.293l9.785 5.805V11.83L0 16.293z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H19.576V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const GoogleIcon: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
        fill="#4285F4"
      />
      <path
        d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
        fill="#34A853"
      />
      <path
        d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
        fill="#FBBC05"
      />
      <path
        d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
        fill="#EA4335"
      />
    </svg>
  );
};
