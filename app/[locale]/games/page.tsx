'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import styles from './page.module.scss'

type Locale = 'fr' | 'en' | 'ar'
type GameId = 'memory' | 'tap' | 'tictactoe'

type Translation = {
  back: string
  title: string
  subtitle: string
  memory: {
    name: string
    description: string
    start: string
    restart: string
    moves: string
    win: string
  }
  tap: {
    name: string
    description: string
    start: string
    restart: string
    score: string
    time: string
    ready: string
    finished: string
  }
  tic: {
    name: string
    description: string
    start: string
    restart: string
    you: string
    computer: string
    yourTurn: string
    computerTurn: string
    win: string
    lose: string
    draw: string
  }
}

const translations: Record<Locale, Translation> = {
  fr: {
    back: 'Retour au menu',
    title: 'Un petit jeu ?',
    subtitle: 'Votre commande se prépare 🍜 Profitez-en pour jouer !',

    memory: {
      name: 'Memory',
      description: 'Trouvez toutes les paires.',
      start: 'Jouer',
      restart: 'Recommencer',
      moves: 'coups',
      win: 'Bravo ! Toutes les paires sont trouvées 🎉',
    },

    tap: {
      name: 'Tap Challenge',
      description: 'Tapez le plus vite possible pendant 10 secondes.',
      start: 'Commencer',
      restart: 'Rejouer',
      score: 'Score',
      time: 'Temps',
      ready: 'Prêt ?',
      finished: 'Temps écoulé !',
    },

    tic: {
      name: 'Morpion',
      description: 'Défiez le robot.',
      start: 'Jouer',
      restart: 'Recommencer',
      you: 'Vous',
      computer: 'Robot',
      yourTurn: 'Votre tour',
      computerTurn: 'Tour du robot...',
      win: 'Vous avez gagné 🎉',
      lose: 'Le robot a gagné 🤖',
      draw: 'Match nul !',
    },
  },

  en: {
    back: 'Back to menu',
    title: 'Want to play?',
    subtitle: 'Your order is being prepared 🍜 Have some fun while you wait!',

    memory: {
      name: 'Memory',
      description: 'Find all the matching pairs.',
      start: 'Play',
      restart: 'Restart',
      moves: 'moves',
      win: 'Great! You found all the pairs 🎉',
    },

    tap: {
      name: 'Tap Challenge',
      description: 'Tap as fast as you can for 10 seconds.',
      start: 'Start',
      restart: 'Play again',
      score: 'Score',
      time: 'Time',
      ready: 'Ready?',
      finished: 'Time is up!',
    },

    tic: {
      name: 'Tic Tac Toe',
      description: 'Challenge the robot.',
      start: 'Play',
      restart: 'Restart',
      you: 'You',
      computer: 'Robot',
      yourTurn: 'Your turn',
      computerTurn: 'Robot turn...',
      win: 'You won 🎉',
      lose: 'The robot won 🤖',
      draw: 'Draw!',
    },
  },

  ar: {
    back: 'العودة إلى القائمة',
    title: 'هل تريد اللعب؟',
    subtitle: 'طلبك قيد التحضير 🍜 استمتع بوقتك أثناء الانتظار!',

    memory: {
      name: 'الذاكرة',
      description: 'اعثر على جميع الأزواج.',
      start: 'العب',
      restart: 'إعادة اللعب',
      moves: 'محاولات',
      win: 'أحسنت! لقد وجدت جميع الأزواج 🎉',
    },

    tap: {
      name: 'تحدي النقر',
      description: 'اضغط بأسرع ما يمكنك لمدة 10 ثوانٍ.',
      start: 'ابدأ',
      restart: 'العب مرة أخرى',
      score: 'النقاط',
      time: 'الوقت',
      ready: 'جاهز؟',
      finished: 'انتهى الوقت!',
    },

    tic: {
      name: 'إكس أو',
      description: 'تحدَّ الروبوت.',
      start: 'العب',
      restart: 'إعادة اللعب',
      you: 'أنت',
      computer: 'الروبوت',
      yourTurn: 'دورك',
      computerTurn: 'دور الروبوت...',
      win: 'لقد فزت 🎉',
      lose: 'الروبوت فاز 🤖',
      draw: 'تعادل!',
    },
  },
}

const memorySymbols = ['🍜', '🍣', '🥢', '🍱', '🥟', '🍤']

const shuffle = <T,>(array: T[]): T[] => {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

type MemoryCard = {
  id: number
  symbol: string
  matched: boolean
}

const createMemoryCards = (): MemoryCard[] => {
  return shuffle([...memorySymbols, ...memorySymbols]).map(
    (symbol, index) => ({
      id: index,
      symbol,
      matched: false,
    }),
  )
}

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const getWinner = (board: string[]): string | null => {
  for (const [a, b, c] of winningLines) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a]
    }
  }

  return null
}

const isBoardFull = (board: string[]) =>
  board.every((cell) => cell !== '')

export default function GamesPage() {
  const params = useParams()

  const locale: Locale =
    typeof params.locale === 'string' &&
    ['fr', 'en', 'ar'].includes(params.locale)
      ? (params.locale as Locale)
      : 'fr'

  const t = translations[locale]
  const isArabic = locale === 'ar'

  const [selectedGame, setSelectedGame] = useState<GameId | null>(null)

  /*
   * ========================================
   * MEMORY
   * ========================================
   */

  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>(
    createMemoryCards,
  )

  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([])
  const [memoryMoves, setMemoryMoves] = useState(0)
  const [memoryLocked, setMemoryLocked] = useState(false)

  const resetMemory = () => {
    setMemoryCards(createMemoryCards())
    setMemoryFlipped([])
    setMemoryMoves(0)
    setMemoryLocked(false)
  }

  const handleMemoryClick = (index: number) => {
    if (memoryLocked) return

    const card = memoryCards[index]

    if (!card || card.matched || memoryFlipped.includes(index)) {
      return
    }

    const nextFlipped = [...memoryFlipped, index]

    setMemoryFlipped(nextFlipped)

    if (nextFlipped.length !== 2) {
      return
    }

    setMemoryMoves((value) => value + 1)
    setMemoryLocked(true)

    const first = memoryCards[nextFlipped[0]]
    const second = memoryCards[nextFlipped[1]]

    if (first.symbol === second.symbol) {
      setTimeout(() => {
        setMemoryCards((current) =>
          current.map((item, itemIndex) =>
            nextFlipped.includes(itemIndex)
              ? { ...item, matched: true }
              : item,
          ),
        )

        setMemoryFlipped([])
        setMemoryLocked(false)
      }, 450)
    } else {
      setTimeout(() => {
        setMemoryFlipped([])
        setMemoryLocked(false)
      }, 750)
    }
  }

  const memoryFinished = memoryCards.every(
    (card) => card.matched,
  )

  /*
   * ========================================
   * TAP CHALLENGE
   * ========================================
   */

  const [tapScore, setTapScore] = useState(0)
  const [tapTime, setTapTime] = useState(10)
  const [tapPlaying, setTapPlaying] = useState(false)

  const startTapGame = () => {
    setTapScore(0)
    setTapTime(10)
    setTapPlaying(true)
  }

  useEffect(() => {
    if (!tapPlaying) return

    const timer = window.setInterval(() => {
      setTapTime((current) => {
        if (current <= 1) {
          window.clearInterval(timer)
          setTapPlaying(false)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [tapPlaying])

  /*
   * ========================================
   * TIC TAC TOE
   * ========================================
   */

  const [ticBoard, setTicBoard] = useState<string[]>(
    Array(9).fill(''),
  )

  const [ticTurn, setTicTurn] = useState<'X' | 'O'>('X')
  const [ticResult, setTicResult] = useState<
    'X' | 'O' | 'draw' | null
  >(null)

  const resetTic = () => {
    setTicBoard(Array(9).fill(''))
    setTicTurn('X')
    setTicResult(null)
  }

  const computerMove = (board: string[]) => {
    const available = board
      .map((cell, index) => (cell === '' ? index : -1))
      .filter((index) => index !== -1)

    if (!available.length) return

    let move = available[Math.floor(Math.random() * available.length)]

    // Le robot essaie de gagner
    for (const index of available) {
      const testBoard = [...board]
      testBoard[index] = 'O'

      if (getWinner(testBoard) === 'O') {
        move = index
        break
      }
    }

    // Puis il essaie de bloquer le joueur
    if (!getWinner([...board])) {
      for (const index of available) {
        const testBoard = [...board]
        testBoard[index] = 'X'

        if (getWinner(testBoard) === 'X') {
          move = index
          break
        }
      }
    }

    const nextBoard = [...board]
    nextBoard[move] = 'O'

    setTicBoard(nextBoard)

    const winner = getWinner(nextBoard)

    if (winner === 'O') {
      setTicResult('O')
      return
    }

    if (isBoardFull(nextBoard)) {
      setTicResult('draw')
      return
    }

    setTicTurn('X')
  }

  const handleTicClick = (index: number) => {
    if (ticTurn !== 'X' || ticResult || ticBoard[index]) {
      return
    }

    const nextBoard = [...ticBoard]
    nextBoard[index] = 'X'

    setTicBoard(nextBoard)

    const winner = getWinner(nextBoard)

    if (winner === 'X') {
      setTicResult('X')
      return
    }

    if (isBoardFull(nextBoard)) {
      setTicResult('draw')
      return
    }

    setTicTurn('O')

    window.setTimeout(() => {
      computerMove(nextBoard)
    }, 500)
  }

  /*
   * ========================================
   * GAME DATA
   * ========================================
   */

  const games = useMemo(
    () => [
      {
        id: 'memory' as GameId,
        icon: '🧠',
        name: t.memory.name,
        description: t.memory.description,
      },
      {
        id: 'tap' as GameId,
        icon: '🎯',
        name: t.tap.name,
        description: t.tap.description,
      },
      {
        id: 'tictactoe' as GameId,
        icon: '❌⭕',
        name: t.tic.name,
        description: t.tic.description,
      },
    ],
    [t],
  )

  return (
    <main
      className={styles.page}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className={styles.orangeBrush} />

      <div className={styles.wavePatternLeft} />
      <div className={styles.wavePatternRight} />

      <div className={styles.container}>
        {/* HEADER */}

        <header className={styles.header}>
          <Link
            href={`/${locale}/menu`}
            className={styles.backButton}
          >
            <span>{isArabic ? '→' : '←'}</span>
            {t.back}
          </Link>

          <div className={styles.logoText}>
            <span>WOK</span>
            <b>N</b>
            <span>ROLL</span>
          </div>
        </header>

        {/* TITLE */}

        <section className={styles.hero}>
          <div className={styles.heroIcon}>🎮</div>

          <h1>{t.title}</h1>

          <p>{t.subtitle}</p>
        </section>

        {/* GAME SELECTOR */}

        {!selectedGame && (
          <section className={styles.gamesGrid}>
            {games.map((game) => (
              <button
                key={game.id}
                type="button"
                className={styles.gameCard}
                onClick={() => setSelectedGame(game.id)}
              >
                <div className={styles.gameIcon}>
                  {game.icon}
                </div>

                <h2>{game.name}</h2>

                <p>{game.description}</p>

                <span className={styles.playButton}>
                  {game.id === 'memory'
                    ? t.memory.start
                    : game.id === 'tap'
                      ? t.tap.start
                      : t.tic.start}
                  <span>{isArabic ? '←' : '→'}</span>
                </span>
              </button>
            ))}
          </section>
        )}

        {/* MEMORY */}

        {selectedGame === 'memory' && (
          <section className={styles.gamePanel}>
            <button
              type="button"
              className={styles.backToGames}
              onClick={() => setSelectedGame(null)}
            >
              {isArabic ? '→' : '←'} {t.back}
            </button>

            <div className={styles.gameHeader}>
              <div className={styles.bigGameIcon}>🧠</div>

              <h2>{t.memory.name}</h2>

              <div className={styles.gameStats}>
                <span>
                  {memoryMoves} {t.memory.moves}
                </span>
              </div>
            </div>

            {memoryFinished && (
              <div className={styles.successMessage}>
                {t.memory.win}
              </div>
            )}

            <div className={styles.memoryGrid}>
              {memoryCards.map((card, index) => {
                const isFlipped =
                  memoryFlipped.includes(index) ||
                  card.matched

                return (
                  <button
                    key={card.id}
                    type="button"
                    className={`${styles.memoryCard} ${
                      isFlipped ? styles.memoryCardFlipped : ''
                    } ${
                      card.matched
                        ? styles.memoryCardMatched
                        : ''
                    }`}
                    onClick={() => handleMemoryClick(index)}
                  >
                    <span className={styles.cardFront}>
                      ?
                    </span>

                    <span className={styles.cardBack}>
                      {card.symbol}
                    </span>
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={resetMemory}
            >
              {t.memory.restart}
            </button>
          </section>
        )}

        {/* TAP */}

        {selectedGame === 'tap' && (
          <section className={styles.gamePanel}>
            <button
              type="button"
              className={styles.backToGames}
              onClick={() => setSelectedGame(null)}
            >
              {isArabic ? '→' : '←'} {t.back}
            </button>

            <div className={styles.gameHeader}>
              <div className={styles.bigGameIcon}>🎯</div>

              <h2>{t.tap.name}</h2>

              <div className={styles.tapStats}>
                <div>
                  <small>{t.tap.score}</small>
                  <strong>{tapScore}</strong>
                </div>

                <div>
                  <small>{t.tap.time}</small>
                  <strong>{tapTime}s</strong>
                </div>
              </div>
            </div>

            {!tapPlaying && tapTime === 10 && (
              <div className={styles.tapStart}>
                <div>🔥</div>
                <p>{t.tap.ready}</p>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={startTapGame}
                >
                  {t.tap.start}
                </button>
              </div>
            )}

            {!tapPlaying && tapTime === 0 && (
              <div className={styles.tapStart}>
                <div>🏆</div>

                <h3>
                  {t.tap.finished}
                </h3>

                <strong className={styles.finalScore}>
                  {tapScore}
                </strong>

                <p>{t.tap.score}</p>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={startTapGame}
                >
                  {t.tap.restart}
                </button>
              </div>
            )}

            {tapPlaying && (
              <button
                type="button"
                className={styles.tapButton}
                onClick={() =>
                  setTapScore((value) => value + 1)
                }
              >
                TAP!
              </button>
            )}
          </section>
        )}

        {/* TIC TAC TOE */}

        {selectedGame === 'tictactoe' && (
          <section className={styles.gamePanel}>
            <button
              type="button"
              className={styles.backToGames}
              onClick={() => setSelectedGame(null)}
            >
              {isArabic ? '→' : '←'} {t.back}
            </button>

            <div className={styles.gameHeader}>
              <div className={styles.bigGameIcon}>
                ❌⭕
              </div>

              <h2>{t.tic.name}</h2>

              {!ticResult && (
                <p className={styles.turnText}>
                  {ticTurn === 'X'
                    ? t.tic.yourTurn
                    : t.tic.computerTurn}
                </p>
              )}
            </div>

            {ticResult && (
              <div className={styles.successMessage}>
                {ticResult === 'X' &&
                  t.tic.win}

                {ticResult === 'O' &&
                  t.tic.lose}

                {ticResult === 'draw' &&
                  t.tic.draw}
              </div>
            )}

            <div className={styles.ticBoard}>
              {ticBoard.map((cell, index) => (
                <button
                  key={index}
                  type="button"
                  className={styles.ticCell}
                  onClick={() => handleTicClick(index)}
                  disabled={
                    Boolean(cell) ||
                    ticTurn !== 'X' ||
                    Boolean(ticResult)
                  }
                >
                  <span
                    className={
                      cell === 'X'
                        ? styles.playerX
                        : styles.playerO
                    }
                  >
                    {cell}
                  </span>
                </button>
              ))}
            </div>

            <div className={styles.ticLegend}>
              <span>
                <b className={styles.playerX}>X</b>
                {t.tic.you}
              </span>

              <span>
                <b className={styles.playerO}>O</b>
                {t.tic.computer}
              </span>
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={resetTic}
            >
              {t.tic.restart}
            </button>
          </section>
        )}

        {/* FOOTER */}

        <footer className={styles.footer}>
          <span>WOK N ROLL</span>
          <i />
          <span>ASIAN RESTAURANT</span>
        </footer>
      </div>
    </main>
  )
}