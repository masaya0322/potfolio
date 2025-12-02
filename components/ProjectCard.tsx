import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  period: string
  category: string
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  period,
  category,
  githubUrl,
  demoUrl,
  imageUrl,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card
        className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
      {imageUrl ? (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200" />
      )}

      <CardContent className="p-6">
        <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {category}
          </span>
          <span>{period}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>

        <p className="mb-4 text-sm text-gray-600 line-clamp-3">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-gray-900"
              aria-label={`${title} GitHub repository`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-gray-900"
              aria-label={`${title} demo site`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-white sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="flex items-center gap-4 text-base">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {category}
              </span>
              <span className="text-gray-500">{period}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {imageUrl && (
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div>
              <h4 className="mb-2 text-lg font-semibold">プロジェクト概要</h4>
              <p className="leading-relaxed text-gray-700">{description}</p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-semibold">使用技術</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(githubUrl || demoUrl) && (
              <div>
                <h4 className="mb-3 text-lg font-semibold">リンク</h4>
                <div className="flex gap-4">
                  {githubUrl && (
                    <Link
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </Link>
                  )}
                  {demoUrl && (
                    <Link
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { ProjectCard }
