"use client";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import { FaUsers, FaRocket, FaLightbulb, FaTrophy } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ejeh Emmanuel Jnr",
    title: "Founder & CEO",
    bio: "Strategic leader with 10+ years in tech innovation",
    icon: <FaRocket size={24} />,
  },
  {
    name: "Boma Jaja",
    title: "human resources manager",
    bio: "Full-stack architect designing scalable solutions",
    icon: <FaLightbulb size={24} />,
  },
  {
    name: "Elena Rodriguez",
    title: "Head of Operations",
    bio: "Operations expert ensuring delivery excellence",
    icon: <FaTrophy size={24} />,
  },
  {
    name: "James Wilson",
    title: "Lead Designer",
    bio: "Creative director crafting user experiences",
    icon: <FaUsers size={24} />,
  },
];

const coreValues = [
  {
    title: "Innovation",
    description:
      "We push boundaries and embrace new technologies to solve real problems.",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards of quality in everything we deliver.",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in all our interactions.",
  },
  {
    title: "Collaboration",
    description:
      "We believe great results come from working together as one team.",
  },
];

const achievements = [
  { metric: "1000+", label: "Happy Students" },
  { metric: "99%", label: "Satisfaction Rate" },
  { metric: "5+", label: "Team Members" },
  { metric: "2+", label: "Years in Business" },
];

export default function AboutPage() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#1976d2",
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#666", maxWidth: 600, mx: "auto", mb: 4 }}
          >
            A child with a dream in Abuja, a graduate searching for hope in
            Lagos, a Mother daring to begin again in PortHacourt this is where our
            future begins. We envision a Nigeria where one million lives rise
            every year through the power of technology; where talent is no
            longer trapped by poverty, location, or lack of opportunity. A
            nation where young people do not merely survive, but build, create,
            lead, and change the world with their minds and their courage.
            Agatech Institute exists to spark a generation so skilled, so
            fearless, and so inspired that the future of Africa will carry their
            fingerprints.
          </Typography>
        </Box>

        {/* Mission Statement Card */}
        <Card
          sx={{
            mb: 8,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 2, color: "#1976d2" }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
              Every line of code learned, every skill mastered, and every life
              transformed is a quiet revolution waiting to shake a nation awake.
              Our mission is to equip one million Nigerians every year with
              life-changing tech skills that open doors, restore dignity, and
              create lasting opportunities. Through accessible, world-class
              learning and a community built on belief and possibility, we are
              raising dreamers into builders, job seekers into innovators, and
              ordinary people into the architects of a better Nigeria.
            </Typography>
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Box sx={{ mb: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              color: "#1976d2",
            }}
          >
            Our Impact
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 8, justifycontent: "center", maxWidth: 900, mx: "auto" }}>
            {achievements.map((achievement, index) => (
              <Box key={index} sx={{ width: { xs: "calc(50% - 12px)", sm: "calc(25% - 12px)" }, display: "flex",  }}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    backgroundColor: "#fff",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                      transform: "translateY(-4px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#1976d2", mb: 1 }}
                  >
                    {achievement.metric}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {achievement.label}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Core Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              color: "#1976d2",
            }}
          >
            Core Values
          </Typography>
          <Grid container spacing={3}>
            {coreValues.map((value, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(25, 118, 210, 0.15)",
                      transform: "translateY(-8px)",
                      borderColor: "#1976d2",
                    },
                    
                  }}
                >
                  <CardContent className="pr-5">
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 1.5, color: "#1976d2",alignItems:"center",paddingHorizontal:20 }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#666", lineHeight: 1.6 }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              color: "#1976d2",
            }}
          >
            Leadership Team
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
                      transform: "translateY(-12px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2, color: "#1976d2" }}>{member.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 0.5, color: "#222" }}
                    >
                      {member.name}
                    </Typography>
                    <Chip
                      label={member.title}
                      size="small"
                      sx={{
                        mb: 1.5,
                        backgroundColor: "#e3f2fd",
                        color: "#1976d2",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "#666", lineHeight: 1.6 }}
                    >
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Paper
          sx={{
            p: { xs: 4, sm: 6, md: 8 },
            textAlign: "center",
            backgroundColor: "#1976d2",
            color: "#fff",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2rem" }
            }}
          >
            Ready to Ignite Your Tech Career?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              opacity: 0.9,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              maxWidth: 500
            }}
          >
            Let's work together to unlock your potential and build the future of Africa. Join us on this exciting journey and be part of a movement that is changing lives through technology.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: 500,
              mx: "auto"
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#1976d2",
                fontWeight: 700,
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.2, sm: 1.5 },
                fontSize: { xs: "0.875rem", sm: "1rem" },
                width: { xs: "100%", sm: "auto" },
                minWidth: { xs: "auto", sm: 150 },
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                fontWeight: 700,
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.2, sm: 1.5 },
                fontSize: { xs: "0.875rem", sm: "1rem" },
                width: { xs: "100%", sm: "auto" },
                minWidth: { xs: "auto", sm: 150 },
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#fff",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.25)",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
