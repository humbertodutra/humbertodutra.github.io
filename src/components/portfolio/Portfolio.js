import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import ProfessionalBlock from './ProfessionalBlock';
import PortfolioBlock from './PortfolioBlock';
import PortfolioBlockBe from './PortfolioBlock_be';
import { info } from '../../info/Info';

export default function Portfolio() {
    const [display, setDisplay] = useState('workingOn'); // State to control displayed projects

    const tabSx = (selected) => ({
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        px: 3,
        py: 1,
        borderRadius: '2rem',
        transition: 'all 250ms ease',
        border: '2px solid #8D53FF',
        color: selected ? '#f8f8f8' : '#8D53FF',
        borderColor: selected ? 'transparent' : '#8D53FF',
        background: selected ? 'linear-gradient(135deg, #8D53FF, #CA6BE6)' : 'transparent',
        boxShadow: selected ? '0 .5rem 1rem rgba(0,0,0,0.4)' : 'none',
        '&:hover': {
            transform: 'translateY(-3px)',
            background: selected ? 'linear-gradient(135deg, #8D53FF, #CA6BE6)' : 'rgba(141, 83, 255, 0.12)',
            boxShadow: '0 .5rem 1rem rgba(0,0,0,0.4)',
        },
    });

    return (
        <>
            <Box display="flex" justifyContent="center" gap={2} marginTop={5}>
                <Button disableRipple sx={tabSx(display === 'workingOn')} onClick={() => setDisplay('workingOn')}>
                    Working On
                </Button>
                <Button disableRipple sx={tabSx(display === 'myProjects')} onClick={() => setDisplay('myProjects')}>
                    My Projects
                </Button>
                <Button disableRipple sx={tabSx(display === 'trybeProjects')} onClick={() => setDisplay('trybeProjects')}>
                    Trybe Projects
                </Button>
            </Box>

            {display === 'myProjects' && (
                <Box marginTop={10}>
                    <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>My Projects</h2>
                    <Grid container display={'flex'} justifyContent={'center'}>
                        {info.portfolioPro.map((project, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <ProfessionalBlock image={project.image} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {display === 'workingOn' && (
                <Box marginTop={10}>
                    <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>Working On</h2>
                    <Grid container display={'flex'} justifyContent={'center'}>
                        {info.portfolioWorkingOn.map((project, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <ProfessionalBlock image={project.image} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {display === 'trybeProjects' && (
                <>
                    <Box marginTop={10}>
                        <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>Front End Projects</h2>
                        <Grid container display={'flex'} justifyContent={'center'}>
                            {info.portfolio.map((project, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box marginTop={10}>
                        <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>Back End Projects</h2>
                        <Grid container display={'flex'} justifyContent={'center'}>
                            {info.portfolioBackend.map((project, index) => (
                                <Grid item xs={12} md={3} key={index}>
                                    <PortfolioBlockBe image={'a'} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
}
