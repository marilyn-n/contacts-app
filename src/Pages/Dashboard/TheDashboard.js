import React, { useState, useContext } from "react";
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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppCtx } from "../../context/appContext";
import CakeIcon from '@mui/icons-material/Cake';
import moment from "moment";

const TheDashboard = () => {
    const { contacts, setContacts } = useContext(AppCtx);

    const starredContacts = contacts.filter(item => item.isStared);
    const map = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.9978504921!2d-99.45510693850875!3d19.39079237487473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMexico%20City%2C%20CDMX!5e0!3m2!1sen!2smx!4v1687906913347!5m2!1sen!2smx" style={{ border: 0, width: '100%', height: 300 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

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
                                        <Typography sx={{ fontSize: '.85rem' }}>{moment(contact.createdDate, "YYYYMMDD").fromNow()}</Typography>
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
                        <List>
                            {contacts.length ? contacts.slice(0, 4).map((contact) => {
                                return (
                                    <ListItem alignItems="flex-start" key={contact.id}>
                                        <ListItemAvatar>
                                            <CakeIcon sx={{ fontSize: '2.25rem', color: '#ef63e0' }} />
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
                                        <Typography sx={{ fontSize: '.85rem' }}>{contact.birthday}</Typography>
                                    </ListItem>
                                )
                            }) : null}
                        </List>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ marginTop: '1rem' }}>
                    <CardContent>
                        <Typography sx={{ marginBottom: '1rem' }}>My Community</Typography>
                        {map}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography>Starred Contacts</Typography>
                        <List>
                            {starredContacts.length > 0 ? starredContacts.slice(0, 4).map((contact) => {
                                return (
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt={`${contact.firstName} ${contact.lastName}`} src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText primary={`${contact.firstName} ${contact.lastName}`} secondary={contact.address} />
                                    </ListItem>
                                )
                            }) : null}
                        </List>
                        {starredContacts.length > 4 ?
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button size="small">See All</Button>
                            </CardActions> : null}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>Groups</Typography>
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

