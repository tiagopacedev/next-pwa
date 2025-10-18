import Link from 'next/link'

export function Footer() {
  return (
    <footer className="text-muted-foreground border-t py-4 text-center text-sm">
      <p>
        Created by{' '}
        <Link
          href="https://github.com/tiagopacedev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 underline"
        >
          Tiago Pace
        </Link>{' '}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
