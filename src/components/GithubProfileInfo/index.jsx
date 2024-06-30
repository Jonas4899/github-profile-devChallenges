import { StatBox } from '../StatBox'
import { RepositoryCard } from '../RepositoryCard'
import imgProfile from './../../resources/images/jonasImg.png'

export function GithubProfileInfo() {
  return (
    <main className="min-h-[70%] px-[20%] py-3 bg-dark3">
      <section className="flex items-start gap-7 relative">
        <img
          src={imgProfile}
          alt="Profile image"
          className="w-[120px] -translate-y-[60px] border-dark3 border-8 rounded-xl"
        />
        <StatBox statName="Followers" statValue={27839} />
        <StatBox statName="Following" statValue={0} />
        <StatBox statName="Location" statValue="San Francisco, CA" />
      </section>
      <h1 className="text-3xl text-lightGray">Jonas4899</h1>
      <p className="my-4 text-base text-gray3">How people build software.</p>
      <section className="grid grid-cols-2 gap-10">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </section>
    </main>
  )
}
