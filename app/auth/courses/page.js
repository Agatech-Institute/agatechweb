'use client'

import Image from 'next/image'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Grid,
  Chip,
  CardHeader,
  IconButton,
  Tooltip,
} from '@mui/material'
import { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import StorageIcon from '@mui/icons-material/Storage'
import TimerIcon from '@mui/icons-material/Timer'
import BuildIcon from '@mui/icons-material/Build'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'


const coursesData = [
  {
    id: 1,
    title: 'App Development',
    image: '/APP.png',
    whatToGain: [
      'Master React Native & Flutter',
      'Build cross-platform apps',
      'Learn mobile UI/UX principles',
    ],
    duration: '12 Weeks',
    techStack: ['React Native', 'Flutter', 'Firebase', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Web Development',
    image: '/WEB.png',
    whatToGain: [
      'Full-stack web expertise',
      'Modern JavaScript frameworks',
      'Database & deployment mastery',
    ],
    duration: '14 Weeks',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Data Science',
    image: '/DATA.png',
    whatToGain: [
      'Data analysis & visualization',
      'Machine learning models',
      'Real-world data projects',
    ],
    duration: '16 Weeks',
    techStack: ['Python', 'Pandas', 'TensorFlow', 'Scikit-learn'],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    image: '/UI.png',
    whatToGain: [
      'Design thinking methodology',
      'Prototyping & wireframing',
      'User research techniques',
    ],
    duration: '10 Weeks',
    techStack: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    image: '/AI.png',
    whatToGain: [
      'Deep learning fundamentals',
      'NLP & computer vision',
      'Deploy ML models',
    ],
    duration: '18 Weeks',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI APIs'],
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    image: '/AI.png',
    whatToGain: [
      'Cloud infrastructure mastery',
      'CI/CD pipelines',
      'Container orchestration',
    ],
    duration: '12 Weeks',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
  },
]

export default function Courses() {
  const [favorites, setFavorites] = useState(new Set())

  const toggleFavorite = (courseId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(courseId)) {
      newFavorites.delete(courseId)
    } else {
      newFavorites.add(courseId)
    }
    setFavorites(newFavorites)
  }

  return (
    <main>
      <Container maxWidth="xl">
        <Box sx={{ py: { xs: 3, sm: 4, md: 6 }, mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Featured Courses
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mt: 1,
              textAlign: 'center',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
            }}
          >
            Level up your skills with our industry-leading courses
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3 }}
          sx={{
            pb: { xs: 4, md: 6 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {coursesData.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  background: '#fff',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
                  },
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Course Image */}
                <CardMedia
                  sx={{
                    height: { xs: 200, sm: 220, md: 240 },
                    position: 'relative',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                    }}
                  />
                </CardMedia>

                {/* Card Header */}
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                        color: '#1a1a1a',
                        mb: 1,
                      }}
                    >
                      {course.title}
                    </Typography>
                  }
                  action={
                    <Tooltip
                      title={
                        favorites.has(course.id)
                          ? 'Remove from favorites'
                          : 'Add to favorites'
                      }
                    >
                      <IconButton
                        size="small"
                        onClick={() => toggleFavorite(course.id)}
                        sx={{
                          color: favorites.has(course.id)
                            ? '#ff6b6b'
                            : '#ccc',
                          '&:hover': {
                            color: '#ff6b6b',
                          },
                        }}
                      >
                        {favorites.has(course.id) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  }
                  sx={{
                    pb: 1,
                  }}
                />

                {/* Card Content */}
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                  }}
                >
                  {/* What to Gain Section */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <SchoolIcon
                        sx={{
                          color: '#667eea',
                          mr: 1,
                          fontSize: '1.2rem',
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: '#1a1a1a',
                          fontSize: '0.95rem',
                        }}
                      >
                        What You'll Gain
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 3.5 }}>
                      {course.whatToGain.map((item, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontSize: '0.85rem',
                            mb: 0.8,
                            display: 'flex',
                            alignItems: 'flex-start',
                            '&:before': {
                              content: '"✓"',
                              color: '#667eea',
                              fontWeight: 700,
                              mr: 1,
                              flexShrink: 0,
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* Duration */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimerIcon
                      sx={{
                        color: '#764ba2',
                        fontSize: '1.2rem',
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#1a1a1a',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}
                    >
                      Duration: <span style={{ color: '#667eea' }}>{course.duration}</span>
                    </Typography>
                  </Box>

                  {/* Tech Stack */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <BuildIcon
                        sx={{
                          color: '#764ba2',
                          mr: 1,
                          fontSize: '1.2rem',
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          color: '#1a1a1a',
                          fontSize: '0.95rem',
                        }}
                      >
                        Tech Stack
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.8,
                        ml: 3.5,
                      }}
                    >
                      {course.techStack.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            background:
                              'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                            color: '#667eea',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            height: 'auto',
                            py: 0.5,
                            '&:hover': {
                              background:
                                'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>

                {/* Enroll Button */}
                <Box
                  sx={{
                    p: 2,
                    pt: 1,
                    borderTop: '1px solid #eee',
                  }}
                >
                  <Box
                    component="button"
                    onClick={() => alert(`Enrolled in ${course.title}!`)}
                    sx={{
                      width: '100%',
                      py: 1.2,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 1,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                      },
                      '&:active': {
                        transform: 'scale(0.98)',
                      },
                    }}
                  >
                    Start Course
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style jsx global>{`
        @media (max-width: 600px) {
          body {
            overflow-x: hidden;
          }
        }

        @media (max-width: 900px) {
          .MuiGrid-root {
            padding: 0.5rem;
          }
        }
      `}</style>
    </main>
  )
}