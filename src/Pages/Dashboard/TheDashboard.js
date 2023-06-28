import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppCtx } from "../../context/appContext";
import moment from "moment";

const TheDashboard = () => {
    const { contacts, setContacts } = useContext(AppCtx);

    console.log(contacts);

    return (
        <Grid container item direction='row' justifyContent='center' alignSelf='center' spacing={2}>
            <Grid item xs={4}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography>Recently Added</Typography>
                        <List>
                            {contacts.length ? contacts.slice(0, 4).map((contact) => {
                                return (
                                    <ListItem alignItems="flex-start" key={contact.id}>
                                        <ListItemAvatar>
                                            <Avatar alt={`${contact.firstName} ${contact.lastName}`} src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${contact.firstName} ${contact.lastName}`}
                                            secondary={
                                                <>
                                                    <Typography
                                                        sx={{ display: 'inline', marginRight: '.25rem' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Mobile
                                                    </Typography>
                                                    {contact.mobile}
                                                </>
                                            }
                                        />
                                        <Typography sx={{ fontSize: '.85rem' }}>{moment(contact.date, "YYYYMMDD").fromNow()}</Typography>
                                    </ListItem>
                                )
                            }) : null}
                        </List>
                        {contacts.length > 4 ?
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button size="small">See All</Button>
                            </CardActions> : null}
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ marginTop: '1rem' }}>
                    <CardContent>
                        <Typography>Birthdays</Typography>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ marginTop: '1rem' }}>
                    <CardContent>
                        <Typography>My Community</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography>Stared Contacts</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary="Work" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary="Vacation" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size="small">Load +3</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>Lists</Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Stared" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Friends" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Family" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button size="small">Load +2</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TheDashboard;

