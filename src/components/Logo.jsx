import Image from 'next/image'
import logoName from '@/images/logos/name.png'

export function Logo(props) {
  return <Image height="50" src={logoName} alt={'KtSaaS'} unoptimized />
}
