import React, { useState } from 'react'
import { m } from 'framer-motion'
import Image from 'next/image'
import { useBreakpoint } from 'common'

const pathMotionConfig = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: {
    duration: 1,
    ease: [0.5, 0.11, 0.13, 1],
  },
}
const logoMotionConfig = {
  initial: { fillOpacity: 0 },
  animate: { fillOpacity: 0.3 },
  transition: {
    duration: 1,
    delay: 0.25,
    ease: [0.25, 0.25, 0, 1],
  },
}

export default function DatabaseVisual() {
  const isSm = useBreakpoint(640)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className="absolute w-full lg:w-auto h-full lg:aspect-square flex items-end lg:items-center justify-center lg:justify-end right-0 top-auto lg:top-0 bottom-0 my-auto"
        style={{ background: 'radial-gradient(60% 60% at 75% 35%, #8BA5D830, transparent)' }}
      >
        <div className="relative w-[200px] mb-6 lg:mb-0 md:lg:mr-[10%] 2xl:mr-[20%] lg:w-[253px] aspect-square">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 253 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            <g filter="url(#filter0_b_231_166118)">
              <m.path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.4895 20.4916C53.5715 16.7886 63.5759 16.0084 73.1192 18.2591L105.664 25.9342C106.087 25.9189 106.513 25.9112 106.94 25.9112H145.2C146.075 25.9112 146.945 25.9436 147.808 26.0075L180.663 18.2591C190.206 16.0084 200.211 16.7886 209.293 20.4916C227.121 27.761 238.782 45.1438 238.782 64.4518V102.068C238.782 108.92 236.069 115.491 231.24 120.336L226.546 125.045C225.344 126.252 224.668 127.888 224.668 129.595V138.258C224.668 158.636 208.202 175.156 187.891 175.156H185.11C181.048 175.156 177.755 171.852 177.755 167.776C177.755 163.701 181.048 160.397 185.11 160.397H187.891C200.078 160.397 209.957 150.485 209.957 138.258V129.595C209.957 123.974 212.183 118.583 216.144 114.609L220.838 109.899C222.908 107.822 224.071 105.005 224.071 102.068V64.4518C224.071 51.1493 216.037 39.1732 203.754 34.1649C197.497 31.6136 190.604 31.0761 184.029 32.6267L169.841 35.9728C173.843 39.8877 176.948 44.7844 178.758 50.3726L190.581 86.8798C195.281 101.392 190.182 117.282 177.951 126.321C167.453 135.003 159.582 146.294 155.022 158.924C160.614 176.153 178.741 186.164 196.392 181.418L198.456 180.864C202.38 179.809 206.413 182.145 207.465 186.082C208.516 190.019 206.188 194.065 202.264 195.12L200.2 195.675C181.5 200.702 162.428 194.149 150.545 180.397L145.761 229.338C145.362 233.09 142.207 235.935 138.447 235.935H114.409C110.689 235.935 107.555 233.148 107.107 229.443L101.474 178.848C89.714 193.649 69.9248 200.886 50.5372 195.674L48.473 195.119C44.5491 194.064 42.2205 190.017 43.2719 186.08C44.3233 182.144 48.3566 179.807 52.2805 180.862L54.3447 181.417C72.5922 186.323 91.3484 175.458 96.2379 157.151C96.2483 157.111 96.2591 157.072 96.2702 157.033C91.585 145.205 84.0291 134.617 74.1605 126.3C61.9495 117.258 56.8625 101.38 61.5586 86.8798L73.3817 50.3726C75.2398 44.6353 78.4631 39.6268 82.6205 35.6614L69.7529 32.6267C63.178 31.0761 56.2853 31.6136 50.0281 34.1649C37.7448 39.1732 29.711 51.1493 29.711 64.4518V102.068C29.711 105.005 30.874 107.822 32.9441 109.899L37.6382 114.609C41.5996 118.583 43.8251 123.974 43.8251 129.595V138.258C43.8251 150.485 53.7047 160.397 65.8916 160.397H68.6722C72.7345 160.397 76.0277 163.701 76.0277 167.776C76.0277 171.852 72.7345 175.156 68.6722 175.156H65.8916C45.58 175.156 29.1142 158.636 29.1142 138.258V129.595C29.1142 127.888 28.4385 126.252 27.2359 125.045L22.5419 120.336C17.7129 115.491 15 108.92 15 102.068V64.4518C15 45.1438 26.6607 27.761 44.4895 20.4916ZM106.94 40.6705C98.0265 40.6705 90.127 46.4287 87.3727 54.9335L75.5496 91.4407C72.7953 99.9454 75.8126 109.262 83.0235 114.519C83.1572 114.616 83.2876 114.718 83.4144 114.824C101.385 129.878 112.958 151.24 115.774 174.558L120.927 221.176H131.835L136.316 175.082C138.826 151.486 150.485 129.827 168.776 114.782C168.887 114.691 169 114.603 169.116 114.519C176.327 109.262 179.344 99.9454 176.59 91.4407L164.767 54.9335C162.013 46.4287 154.113 40.6705 145.2 40.6705H106.94Z"
                stroke="url(#paint0_linear_231_166118)"
                strokeWidth="0.5"
                initial={pathMotionConfig.initial}
                animate={isHovered && pathMotionConfig.animate}
                transition={pathMotionConfig.transition as any}
              />
            </g>
            <g filter="url(#filter0_b_231_166118)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.4895 20.4916C53.5715 16.7886 63.5759 16.0084 73.1192 18.2591L105.664 25.9342C106.087 25.9189 106.513 25.9112 106.94 25.9112H145.2C146.075 25.9112 146.945 25.9436 147.808 26.0075L180.663 18.2591C190.206 16.0084 200.211 16.7886 209.293 20.4916C227.121 27.761 238.782 45.1438 238.782 64.4518V102.068C238.782 108.92 236.069 115.491 231.24 120.336L226.546 125.045C225.344 126.252 224.668 127.888 224.668 129.595V138.258C224.668 158.636 208.202 175.156 187.891 175.156H185.11C181.048 175.156 177.755 171.852 177.755 167.776C177.755 163.701 181.048 160.397 185.11 160.397H187.891C200.078 160.397 209.957 150.485 209.957 138.258V129.595C209.957 123.974 212.183 118.583 216.144 114.609L220.838 109.899C222.908 107.822 224.071 105.005 224.071 102.068V64.4518C224.071 51.1493 216.037 39.1732 203.754 34.1649C197.497 31.6136 190.604 31.0761 184.029 32.6267L169.841 35.9728C173.843 39.8877 176.948 44.7844 178.758 50.3726L190.581 86.8798C195.281 101.392 190.182 117.282 177.951 126.321C167.453 135.003 159.582 146.294 155.022 158.924C160.614 176.153 178.741 186.164 196.392 181.418L198.456 180.864C202.38 179.809 206.413 182.145 207.465 186.082C208.516 190.019 206.188 194.065 202.264 195.12L200.2 195.675C181.5 200.702 162.428 194.149 150.545 180.397L145.761 229.338C145.362 233.09 142.207 235.935 138.447 235.935H114.409C110.689 235.935 107.555 233.148 107.107 229.443L101.474 178.848C89.714 193.649 69.9248 200.886 50.5372 195.674L48.473 195.119C44.5491 194.064 42.2205 190.017 43.2719 186.08C44.3233 182.144 48.3566 179.807 52.2805 180.862L54.3447 181.417C72.5922 186.323 91.3484 175.458 96.2379 157.151C96.2483 157.111 96.2591 157.072 96.2702 157.033C91.585 145.205 84.0291 134.617 74.1605 126.3C61.9495 117.258 56.8625 101.38 61.5586 86.8798L73.3817 50.3726C75.2398 44.6353 78.4631 39.6268 82.6205 35.6614L69.7529 32.6267C63.178 31.0761 56.2853 31.6136 50.0281 34.1649C37.7448 39.1732 29.711 51.1493 29.711 64.4518V102.068C29.711 105.005 30.874 107.822 32.9441 109.899L37.6382 114.609C41.5996 118.583 43.8251 123.974 43.8251 129.595V138.258C43.8251 150.485 53.7047 160.397 65.8916 160.397H68.6722C72.7345 160.397 76.0277 163.701 76.0277 167.776C76.0277 171.852 72.7345 175.156 68.6722 175.156H65.8916C45.58 175.156 29.1142 158.636 29.1142 138.258V129.595C29.1142 127.888 28.4385 126.252 27.2359 125.045L22.5419 120.336C17.7129 115.491 15 108.92 15 102.068V64.4518C15 45.1438 26.6607 27.761 44.4895 20.4916ZM106.94 40.6705C98.0265 40.6705 90.127 46.4287 87.3727 54.9335L75.5496 91.4407C72.7953 99.9454 75.8126 109.262 83.0235 114.519C83.1572 114.616 83.2876 114.718 83.4144 114.824C101.385 129.878 112.958 151.24 115.774 174.558L120.927 221.176H131.835L136.316 175.082C138.826 151.486 150.485 129.827 168.776 114.782C168.887 114.691 169 114.603 169.116 114.519C176.327 109.262 179.344 99.9454 176.59 91.4407L164.767 54.9335C162.013 46.4287 154.113 40.6705 145.2 40.6705H106.94Z"
                stroke="url(#paint0_linear_231_166118)"
                strokeWidth="0.5"
                opacity={0.5}
              />
            </g>
            <g filter="url(#filter1_b_231_166118)">
              <m.path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.4895 20.4916C53.5715 16.7886 63.5759 16.0084 73.1192 18.2591L105.664 25.9342C106.087 25.9189 106.513 25.9112 106.94 25.9112H145.2C146.075 25.9112 146.945 25.9436 147.808 26.0075L180.663 18.2591C190.206 16.0084 200.211 16.7886 209.293 20.4916C227.121 27.761 238.782 45.1438 238.782 64.4518V102.068C238.782 108.92 236.069 115.491 231.24 120.336L226.546 125.045C225.344 126.252 224.668 127.888 224.668 129.595V138.258C224.668 158.636 208.202 175.156 187.891 175.156H185.11C181.048 175.156 177.755 171.852 177.755 167.776C177.755 163.701 181.048 160.397 185.11 160.397H187.891C200.078 160.397 209.957 150.485 209.957 138.258V129.595C209.957 123.974 212.183 118.583 216.144 114.609L220.838 109.899C222.908 107.822 224.071 105.005 224.071 102.068V64.4518C224.071 51.1493 216.037 39.1732 203.754 34.1649C197.497 31.6136 190.604 31.0761 184.029 32.6267L169.841 35.9728C173.843 39.8877 176.948 44.7844 178.758 50.3726L190.581 86.8798C195.281 101.392 190.182 117.282 177.951 126.321C167.453 135.003 159.582 146.294 155.022 158.924C160.614 176.153 178.741 186.164 196.392 181.418L198.456 180.864C202.38 179.809 206.413 182.145 207.465 186.082C208.516 190.019 206.188 194.065 202.264 195.12L200.2 195.675C181.5 200.702 162.428 194.149 150.545 180.397L145.761 229.339C145.362 233.09 142.207 235.935 138.447 235.935H114.409C110.689 235.935 107.555 233.148 107.107 229.443L101.474 178.848C89.714 193.649 69.9248 200.886 50.5372 195.674L48.473 195.119C44.5491 194.064 42.2205 190.017 43.2719 186.08C44.3233 182.144 48.3566 179.807 52.2805 180.862L54.3447 181.417C72.5922 186.323 91.3484 175.458 96.2379 157.151C96.2483 157.111 96.2591 157.072 96.2702 157.033C91.585 145.205 84.0291 134.617 74.1605 126.3C61.9495 117.258 56.8625 101.38 61.5586 86.8798L73.3817 50.3726C75.2398 44.6353 78.4631 39.6268 82.6205 35.6614L69.7529 32.6267C63.178 31.0761 56.2853 31.6136 50.0281 34.1649C37.7448 39.1732 29.711 51.1493 29.711 64.4518V102.068C29.711 105.005 30.874 107.822 32.9441 109.899L37.6382 114.609C41.5996 118.583 43.8251 123.974 43.8251 129.595V138.258C43.8251 150.485 53.7046 160.397 65.8916 160.397H68.6722C72.7345 160.397 76.0277 163.701 76.0277 167.776C76.0277 171.852 72.7345 175.156 68.6722 175.156H65.8916C45.58 175.156 29.1142 158.636 29.1142 138.258V129.595C29.1142 127.888 28.4385 126.252 27.2359 125.045L22.5419 120.336C17.7129 115.491 15 108.92 15 102.068V64.4518C15 45.1438 26.6607 27.761 44.4895 20.4916ZM106.94 40.6705C98.0265 40.6705 90.127 46.4287 87.3727 54.9335L75.5496 91.4407C72.7953 99.9454 75.8126 109.262 83.0235 114.519C83.1572 114.616 83.2875 114.718 83.4144 114.824C101.385 129.878 112.958 151.24 115.774 174.558L120.927 221.176H131.835L136.316 175.082C138.826 151.486 150.485 129.827 168.776 114.782C168.887 114.691 169 114.603 169.116 114.519C176.327 109.262 179.344 99.9454 176.59 91.4407L164.767 54.9335C162.013 46.4287 154.113 40.6705 145.2 40.6705H106.94Z"
                fill="url(#paint1_linear_231_166118)"
                fillOpacity="0.3"
                initial={logoMotionConfig.initial}
                animate={isHovered && logoMotionConfig.animate}
                transition={logoMotionConfig.transition as any}
                className={['transition-opacity', isHovered ? 'opacity-100' : 'opacity-80'].join(
                  ' '
                )}
              />
              {/* <m.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.4895 20.4916C53.5715 16.7886 63.5759 16.0084 73.1192 18.2591L105.664 25.9342C106.087 25.9189 106.513 25.9112 106.94 25.9112H145.2C146.075 25.9112 146.945 25.9436 147.808 26.0075L180.663 18.2591C190.206 16.0084 200.211 16.7886 209.293 20.4916C227.121 27.761 238.782 45.1438 238.782 64.4518V102.068C238.782 108.92 236.069 115.491 231.24 120.336L226.546 125.045C225.344 126.252 224.668 127.888 224.668 129.595V138.258C224.668 158.636 208.202 175.156 187.891 175.156H185.11C181.048 175.156 177.755 171.852 177.755 167.776C177.755 163.701 181.048 160.397 185.11 160.397H187.891C200.078 160.397 209.957 150.485 209.957 138.258V129.595C209.957 123.974 212.183 118.583 216.144 114.609L220.838 109.899C222.908 107.822 224.071 105.005 224.071 102.068V64.4518C224.071 51.1493 216.037 39.1732 203.754 34.1649C197.497 31.6136 190.604 31.0761 184.029 32.6267L169.841 35.9728C173.843 39.8877 176.948 44.7844 178.758 50.3726L190.581 86.8798C195.281 101.392 190.182 117.282 177.951 126.321C167.453 135.003 159.582 146.294 155.022 158.924C160.614 176.153 178.741 186.164 196.392 181.418L198.456 180.864C202.38 179.809 206.413 182.145 207.465 186.082C208.516 190.019 206.188 194.065 202.264 195.12L200.2 195.675C181.5 200.702 162.428 194.149 150.545 180.397L145.761 229.339C145.362 233.09 142.207 235.935 138.447 235.935H114.409C110.689 235.935 107.555 233.148 107.107 229.443L101.474 178.848C89.714 193.649 69.9248 200.886 50.5372 195.674L48.473 195.119C44.5491 194.064 42.2205 190.017 43.2719 186.08C44.3233 182.144 48.3566 179.807 52.2805 180.862L54.3447 181.417C72.5922 186.323 91.3484 175.458 96.2379 157.151C96.2483 157.111 96.2591 157.072 96.2702 157.033C91.585 145.205 84.0291 134.617 74.1605 126.3C61.9495 117.258 56.8625 101.38 61.5586 86.8798L73.3817 50.3726C75.2398 44.6353 78.4631 39.6268 82.6205 35.6614L69.7529 32.6267C63.178 31.0761 56.2853 31.6136 50.0281 34.1649C37.7448 39.1732 29.711 51.1493 29.711 64.4518V102.068C29.711 105.005 30.874 107.822 32.9441 109.899L37.6382 114.609C41.5996 118.583 43.8251 123.974 43.8251 129.595V138.258C43.8251 150.485 53.7046 160.397 65.8916 160.397H68.6722C72.7345 160.397 76.0277 163.701 76.0277 167.776C76.0277 171.852 72.7345 175.156 68.6722 175.156H65.8916C45.58 175.156 29.1142 158.636 29.1142 138.258V129.595C29.1142 127.888 28.4385 126.252 27.2359 125.045L22.5419 120.336C17.7129 115.491 15 108.92 15 102.068V64.4518C15 45.1438 26.6607 27.761 44.4895 20.4916ZM106.94 40.6705C98.0265 40.6705 90.127 46.4287 87.3727 54.9335L75.5496 91.4407C72.7953 99.9454 75.8126 109.262 83.0235 114.519C83.1572 114.616 83.2875 114.718 83.4144 114.824C101.385 129.878 112.958 151.24 115.774 174.558L120.927 221.176H131.835L136.316 175.082C138.826 151.486 150.485 129.827 168.776 114.782C168.887 114.691 169 114.603 169.116 114.519C176.327 109.262 179.344 99.9454 176.59 91.4407L164.767 54.9335C162.013 46.4287 154.113 40.6705 145.2 40.6705H106.94Z"
              stroke="url(#paint2_linear_231_166118)"
              strokeWidth="0.5"
              initial={logoMotionConfig.initial}
              animate={isInView && logoMotionConfig.animate}
              transition={logoMotionConfig.transition as any}
            /> */}
            </g>
            <defs>
              <filter
                id="filter0_b_231_166118"
                x="10.75"
                y="12.75"
                width="232.282"
                height="227.436"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_231_166118"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_231_166118"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_231_166118"
                x="10.75"
                y="12.75"
                width="232.282"
                height="227.436"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_225_165856"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_225_165856"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_231_166118"
                x1="141.614"
                y1="17"
                x2="141.614"
                y2="231.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F1F8F6" />
                <stop offset="1" stopColor="#C9C9C9" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_231_166118"
                x1="73.609"
                y1="33.6361"
                x2="73.609"
                y2="193.73"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#7C7C7C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_231_166118"
                x1="141.614"
                y1="17"
                x2="141.614"
                y2="231.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F1F8F6" />
                <stop offset="1" stopColor="#C9C9C9" />
              </linearGradient>
            </defs>
          </svg>
          <Image
            src="/images/index/products/PG-visual-base.svg"
            alt="Supabase Database"
            layout="fill"
            objectFit="contain"
            width={isSm ? 253 : 253}
            height={isSm ? 253 : 253}
            priority
            lazyBoundary="-50px"
            quality={95}
          />
        </div>
      </div>
    </div>
  )
}
{
  /* <svg width="289" height="285" viewBox="0 0 289 285" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_225_165856)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.1447 36.4565C71.2267 32.7534 81.2312 31.9733 90.7744 34.2239L123.319 41.8991C123.743 41.8838 124.168 41.8761 124.595 41.8761H162.855C163.731 41.8761 164.601 41.9085 165.463 41.9723L198.318 34.2239C207.862 31.9733 217.866 32.7534 226.948 36.4565C244.777 43.7259 256.438 61.1086 256.438 80.4166V118.033C256.438 124.885 253.725 131.456 248.896 136.301L244.202 141.01C242.999 142.217 242.323 143.853 242.323 145.559V154.223C242.323 174.601 225.858 191.121 205.546 191.121H202.765C198.703 191.121 195.41 187.817 195.41 183.741C195.41 179.666 198.703 176.362 202.765 176.362H205.546C217.733 176.362 227.612 166.45 227.612 154.223V145.559C227.612 139.939 229.838 134.548 233.799 130.574L238.493 125.864C240.564 123.787 241.727 120.97 241.727 118.033V80.4166C241.727 67.1141 233.693 55.1381 221.409 50.1297C215.152 47.5785 208.26 47.041 201.685 48.5916L187.497 51.9376C191.498 55.8525 194.603 60.7493 196.413 66.3374L208.236 102.845C212.936 117.357 207.837 133.247 195.606 142.286C185.108 150.967 177.237 162.259 172.678 174.889C178.27 192.118 196.396 202.128 214.047 197.383L216.111 196.828C220.035 195.773 224.069 198.11 225.12 202.047C226.171 205.983 223.843 210.03 219.919 211.085L217.855 211.64C199.156 216.667 180.083 210.113 168.201 196.362L163.416 245.303C163.017 249.055 159.863 251.9 156.102 251.9H132.065C128.345 251.9 125.21 249.113 124.763 245.408L119.129 194.813C107.369 209.614 87.5801 216.85 68.1925 211.638L66.1283 211.083C62.2044 210.029 59.8758 205.982 60.9272 202.045C61.9786 198.109 66.0119 195.772 69.9358 196.827L71.9999 197.382C90.2475 202.287 109.004 191.423 113.893 173.116C113.904 173.076 113.914 173.037 113.925 172.998C109.24 161.17 101.684 150.582 91.8158 142.265C79.6048 133.223 74.5177 117.345 79.2139 102.845L91.037 66.3374C92.895 60.6001 96.1184 55.5916 100.276 51.6262L87.4082 48.5916C80.8332 47.041 73.9405 47.5785 67.6834 50.1297C55.4001 55.1381 47.3663 67.1141 47.3663 80.4166V118.033C47.3663 120.97 48.5293 123.787 50.5994 125.864L55.2934 130.574C59.2539 134.548 61.4804 139.939 61.4804 145.559V154.223C61.4804 166.45 71.3599 176.362 83.5469 176.362H86.3275C90.3898 176.362 93.6829 179.666 93.6829 183.741C93.6829 187.817 90.3898 191.121 86.3275 191.121H83.5469C63.2353 191.121 46.7694 174.601 46.7694 154.223V145.559C46.7694 143.853 46.0938 142.217 44.8912 141.01L40.1972 136.301C35.3682 131.456 32.6553 124.885 32.6553 118.033V80.4166C32.6553 61.1086 44.316 43.7259 62.1447 36.4565ZM124.595 56.6354C115.682 56.6354 107.782 62.3935 105.028 70.8983L93.2049 107.406C90.4505 115.91 93.4679 125.227 100.679 130.483C100.812 130.581 100.943 130.683 101.07 130.789C119.04 145.843 130.613 167.205 133.43 190.523L138.582 237.141H149.49L153.972 191.047C156.481 167.451 168.141 145.792 186.431 130.747C186.542 130.656 186.655 130.568 186.771 130.483C193.982 125.227 197 115.91 194.245 107.406L182.422 70.8983C179.668 62.3935 171.768 56.6354 162.855 56.6354H124.595Z" stroke="url(#paint0_linear_225_165856)" stroke-width="0.5"/>
</g>
<g filter="url(#filter1_bd_225_165856)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.1447 36.4565C71.2267 32.7534 81.2312 31.9733 90.7744 34.2239L123.319 41.8991C123.743 41.8838 124.168 41.8761 124.595 41.8761H162.855C163.731 41.8761 164.601 41.9085 165.463 41.9723L198.318 34.2239C207.862 31.9733 217.866 32.7534 226.948 36.4565C244.777 43.7259 256.438 61.1086 256.438 80.4166V118.033C256.438 124.885 253.725 131.456 248.896 136.301L244.202 141.01C242.999 142.217 242.323 143.853 242.323 145.559V154.223C242.323 174.601 225.858 191.121 205.546 191.121H202.765C198.703 191.121 195.41 187.817 195.41 183.741C195.41 179.666 198.703 176.362 202.765 176.362H205.546C217.733 176.362 227.612 166.45 227.612 154.223V145.559C227.612 139.939 229.838 134.548 233.799 130.574L238.493 125.864C240.563 123.787 241.727 120.97 241.727 118.033V80.4166C241.727 67.1141 233.693 55.1381 221.409 50.1297C215.152 47.5785 208.26 47.041 201.685 48.5916L187.497 51.9376C191.498 55.8525 194.603 60.7493 196.413 66.3374L208.236 102.845C212.936 117.357 207.837 133.247 195.606 142.286C185.108 150.967 177.237 162.259 172.678 174.889C178.27 192.118 196.396 202.128 214.047 197.383L216.111 196.828C220.035 195.774 224.069 198.11 225.12 202.047C226.171 205.983 223.843 210.03 219.919 211.085L217.855 211.64C199.156 216.667 180.083 210.113 168.201 196.362L163.416 245.303C163.017 249.055 159.863 251.9 156.102 251.9H132.065C128.345 251.9 125.21 249.113 124.763 245.408L119.129 194.813C107.369 209.614 87.5801 216.85 68.1925 211.638L66.1283 211.083C62.2044 210.029 59.8758 205.982 60.9272 202.045C61.9786 198.109 66.0119 195.772 69.9358 196.827L71.9999 197.382C90.2475 202.287 109.004 191.423 113.893 173.116C113.904 173.076 113.914 173.037 113.925 172.998C109.24 161.17 101.684 150.582 91.8158 142.265C79.6048 133.223 74.5177 117.345 79.2139 102.845L91.037 66.3374C92.895 60.6001 96.1184 55.5916 100.276 51.6262L87.4082 48.5916C80.8332 47.041 73.9405 47.5785 67.6834 50.1297C55.4001 55.1381 47.3663 67.1141 47.3663 80.4166V118.033C47.3663 120.97 48.5293 123.787 50.5994 125.864L55.2934 130.574C59.2539 134.548 61.4804 139.939 61.4804 145.559V154.223C61.4804 166.45 71.3599 176.362 83.5469 176.362H86.3275C90.3898 176.362 93.683 179.666 93.683 183.741C93.683 187.817 90.3898 191.121 86.3275 191.121H83.5469C63.2352 191.121 46.7694 174.601 46.7694 154.223V145.559C46.7694 143.853 46.0938 142.217 44.8912 141.01L40.1972 136.301C35.3682 131.456 32.6553 124.885 32.6553 118.033V80.4166C32.6553 61.1086 44.316 43.7259 62.1447 36.4565ZM124.595 56.6354C115.682 56.6354 107.782 62.3936 105.028 70.8983L93.2049 107.406C90.4505 115.91 93.4679 125.227 100.679 130.483C100.812 130.581 100.943 130.683 101.07 130.789C119.04 145.843 130.613 167.205 133.43 190.523L138.582 237.141H149.49L153.972 191.047C156.481 167.451 168.141 145.792 186.431 130.747C186.542 130.656 186.655 130.568 186.771 130.483C193.982 125.227 197 115.91 194.245 107.406L182.422 70.8983C179.668 62.3936 171.768 56.6354 162.855 56.6354H124.595Z" fill="url(#paint1_linear_225_165856)" fill-opacity="0.07" shape-rendering="crispEdges"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.1447 36.4565C71.2267 32.7534 81.2312 31.9733 90.7744 34.2239L123.319 41.8991C123.743 41.8838 124.168 41.8761 124.595 41.8761H162.855C163.731 41.8761 164.601 41.9085 165.463 41.9723L198.318 34.2239C207.862 31.9733 217.866 32.7534 226.948 36.4565C244.777 43.7259 256.438 61.1086 256.438 80.4166V118.033C256.438 124.885 253.725 131.456 248.896 136.301L244.202 141.01C242.999 142.217 242.323 143.853 242.323 145.559V154.223C242.323 174.601 225.858 191.121 205.546 191.121H202.765C198.703 191.121 195.41 187.817 195.41 183.741C195.41 179.666 198.703 176.362 202.765 176.362H205.546C217.733 176.362 227.612 166.45 227.612 154.223V145.559C227.612 139.939 229.838 134.548 233.799 130.574L238.493 125.864C240.563 123.787 241.727 120.97 241.727 118.033V80.4166C241.727 67.1141 233.693 55.1381 221.409 50.1297C215.152 47.5785 208.26 47.041 201.685 48.5916L187.497 51.9376C191.498 55.8525 194.603 60.7493 196.413 66.3374L208.236 102.845C212.936 117.357 207.837 133.247 195.606 142.286C185.108 150.967 177.237 162.259 172.678 174.889C178.27 192.118 196.396 202.128 214.047 197.383L216.111 196.828C220.035 195.774 224.069 198.11 225.12 202.047C226.171 205.983 223.843 210.03 219.919 211.085L217.855 211.64C199.156 216.667 180.083 210.113 168.201 196.362L163.416 245.303C163.017 249.055 159.863 251.9 156.102 251.9H132.065C128.345 251.9 125.21 249.113 124.763 245.408L119.129 194.813C107.369 209.614 87.5801 216.85 68.1925 211.638L66.1283 211.083C62.2044 210.029 59.8758 205.982 60.9272 202.045C61.9786 198.109 66.0119 195.772 69.9358 196.827L71.9999 197.382C90.2475 202.287 109.004 191.423 113.893 173.116C113.904 173.076 113.914 173.037 113.925 172.998C109.24 161.17 101.684 150.582 91.8158 142.265C79.6048 133.223 74.5177 117.345 79.2139 102.845L91.037 66.3374C92.895 60.6001 96.1184 55.5916 100.276 51.6262L87.4082 48.5916C80.8332 47.041 73.9405 47.5785 67.6834 50.1297C55.4001 55.1381 47.3663 67.1141 47.3663 80.4166V118.033C47.3663 120.97 48.5293 123.787 50.5994 125.864L55.2934 130.574C59.2539 134.548 61.4804 139.939 61.4804 145.559V154.223C61.4804 166.45 71.3599 176.362 83.5469 176.362H86.3275C90.3898 176.362 93.683 179.666 93.683 183.741C93.683 187.817 90.3898 191.121 86.3275 191.121H83.5469C63.2352 191.121 46.7694 174.601 46.7694 154.223V145.559C46.7694 143.853 46.0938 142.217 44.8912 141.01L40.1972 136.301C35.3682 131.456 32.6553 124.885 32.6553 118.033V80.4166C32.6553 61.1086 44.316 43.7259 62.1447 36.4565ZM124.595 56.6354C115.682 56.6354 107.782 62.3936 105.028 70.8983L93.2049 107.406C90.4505 115.91 93.4679 125.227 100.679 130.483C100.812 130.581 100.943 130.683 101.07 130.789C119.04 145.843 130.613 167.205 133.43 190.523L138.582 237.141H149.49L153.972 191.047C156.481 167.451 168.141 145.792 186.431 130.747C186.542 130.656 186.655 130.568 186.771 130.483C193.982 125.227 197 115.91 194.245 107.406L182.422 70.8983C179.668 62.3936 171.768 56.6354 162.855 56.6354H124.595Z" stroke="url(#paint2_linear_225_165856)" stroke-opacity="0.9" stroke-width="0.5" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_b_225_165856" x="28.4053" y="28.7148" width="232.282" height="227.436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_225_165856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_225_165856" result="shape"/>
</filter>
<filter id="filter1_bd_225_165856" x="0.405273" y="0.714844" width="288.282" height="283.436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_225_165856"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="16"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_backgroundBlur_225_165856" result="effect2_dropShadow_225_165856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_225_165856" result="shape"/>
</filter>
<linearGradient id="paint0_linear_225_165856" x1="159.27" y1="32.9648" x2="159.27" y2="247.958" gradientUnits="userSpaceOnUse">
<stop stop-color="#F1F8F6"/>
<stop offset="1" stop-color="#C9C9C9"/>
</linearGradient>
<linearGradient id="paint1_linear_225_165856" x1="91.2643" y1="49.601" x2="91.2643" y2="209.695" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#7C7C7C"/>
</linearGradient>
<linearGradient id="paint2_linear_225_165856" x1="159.27" y1="32.9648" x2="159.27" y2="247.958" gradientUnits="userSpaceOnUse">
<stop stop-color="#F1F8F6"/>
<stop offset="1" stop-color="#C9C9C9"/>
</linearGradient>
</defs>
</svg> */
}
