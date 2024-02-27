// "use client"
import { Button, Grid, Stack, Tab, Tabs } from '@mui/material'
import Link from 'next/link'
import { useSearchParams,  useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { getPostsPagination } from '../../../lib/db/methods'
import PostPreview from '../posts/posts-preview'

const HomeTabs = async ({tabValue}: {tabValue?:string}) => {


    const tabs = [
        {label: "Latest stories", value: "latest"},
        {label: "Think", value: "think"},
        {label: "Health", value: "health"},
    ]
    const arr = [1,2,3,4]
    const posts = await getPostsPagination()

    return (<Stack>
        <Tabs  value={tabValue ?? "latest"}>
            {tabs.map((tab) =><Tab href={`?tabValue=${tab.value}`} LinkComponent={Link} {...tab}/>)}
        </Tabs>
       <Grid rowSpacing={4} container spacing={4}>
            {posts.length < 4 ?
            arr.map((post) => <Grid xs={12} md={6} key={"mock-post"+post} item><PostPreview {...posts[0]}/></Grid >)
            :
            posts.map((post) => <Grid item><PostPreview {...post}/></Grid >)
            }
            <Grid alignSelf='center' alignContent={"center"} item xs={12}><Button variant='outlined' size='large'>View more</Button></Grid>
       </Grid>
    </Stack>)
}

export default HomeTabs