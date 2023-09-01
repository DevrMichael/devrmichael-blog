import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/sanity/sanity.query';
import type { ProjectType } from '@/types';

export default async function Project() {
  const projects: ProjectType[] = await getProjects();
  console.log('test' + projects);

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Welcome to the blog!
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          Welcome to our blog, where we delve into the ever-evolving world of
          programming and development. In this digital age, coding has become
          the linchpin of innovation, driving everything from your favorite apps
          to life-changing technologies. Whether you&apos;re a seasoned
          developer or an aspiring coder, we aim to demystify intricate
          programming concepts, explore best practices, and offer insights into
          the latest industry trends. Join us on this journey to decode the
          future, one line of code at a time.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/blog/${project.slug}`}
            key={project._id}
            className="flex flex-col justify-center	 items-center gap-4 gap-x-4 bg-white border border-[#1d1d20] border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out text-zinc-400"
          >
            <Image
              src={project.logo}
              width={250}
              height={250}
              alt={project.name}
              className="rounded-md"
            />
            <div>
              <h3 className="font-semibold mb-1 text-zinc-500">
                {project.name}
              </h3>
              <div className="text-sm text-zinc-400">{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
