import templateReducer, { templateActions1 } from '../features/templateData/templateSlice';

describe('templateSlice reducer', () => {
    const initialState = {
        templateInfo: {
            id: 1,
            title: "",
            description: "",
            imgUrl: "",
        },
    };

    it('should handle updateTemplate', () => {
        const action = templateActions1.updateTemplate({ section: 'hero', variable: 'title', value: 'New Title' });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.title).toEqual('New Title');
    });

    it('should handle addNewElement', () => {
        const action = templateActions1.addNewElement({ section: 'hero', blockName: 'newBlock' });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.newBlock).toBeDefined();
    });

});



describe('templateSlice reducer', () => {
    const initialState = {
        navbar: {
            imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701811960/templates/template_one/Logo_mj7rvw.png",
            links: [
                { title: "home", url: "#" },
                { title: "pages", url: "#" },
                { title: "services", url: "#" },
                { title: "projects", url: "#" },
                { title: "blog", url: "#" },
                { title: "contact", url: "#" },
            ],
        },
    };

    it('should add a new navbar link', () => {
        const newLink = { title: "new link", url: "#" };
        const action = templateActions1.addNewElement({ section: 'navbar', blockName: 'newLink', value: newLink });
        const newState = templateReducer(initialState, action);
        expect(newState.navbar.links.length).toEqual(initialState.navbar.links.length + 1);
        expect(newState.navbar.links.find(link => link.title === 'new link')).toBeDefined();
    });

    it('should edit a navbar link', () => {
        const editedLink = { title: "edited link", url: "#" };
        const action = templateActions1.updateTemplate({ section: 'navbar', variable: 'links', value: [editedLink] });
        const newState = templateReducer(initialState, action);
        expect(newState.navbar.links.length).toEqual(1);
        expect(newState.navbar.links[0]).toEqual(editedLink);
    });

    it('should delete a navbar link', () => {
        const action = templateActions1.deleteElement({ section: 'navbar', blockName: 'links', value: 'home' });
        const newState = templateReducer(initialState, action);
        expect(newState.navbar.links.length).toEqual(initialState.navbar.links.length - 1);
        expect(newState.navbar.links.find(link => link.title === 'home')).toBeUndefined();
    });
});



describe('templateSlice reducer', () => {
    // Mock initial state
    const initialState = {
        hero: {
            title: "Let Your Home Be Unique",
            description: "There are many variations of the passages of lorem Ipsum from available, variations of the passages.",
            imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808857/templates/template_one/Photo_3_jpjtdv.jpg",
            buttonText: "Get Started",
            icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
        },
    };

    it('should update hero title', () => {
        const newTitle = "New Hero Title";
        const action = templateActions1.updateTemplate({ section: 'hero', variable: 'title', value: newTitle });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.title).toEqual(newTitle);
    });

    it('should update hero description', () => {
        const newDescription = "New hero description.";
        const action = templateActions1.updateTemplate({ section: 'hero', variable: 'description', value: newDescription });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.description).toEqual(newDescription);
    });

    it('should update hero image URL', () => {
        const newImgUrl = "https://example.com/new-image.jpg";
        const action = templateActions1.updateTemplate({ section: 'hero', variable: 'imgUrl', value: newImgUrl });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.imgUrl).toEqual(newImgUrl);
    });

    it('should update hero button text', () => {
        const newButtonText = "Start Now";
        const action = templateActions1.updateTemplate({ section: 'hero', variable: 'buttonText', value: newButtonText });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.buttonText).toEqual(newButtonText);
    });

    it('should update hero icon', () => {
        const newIcon = "https://example.com/new-icon.svg";
        const action = templateActions1.updateTemplate({ section: 'hero', variable: 'icon', value: newIcon });
        const newState = templateReducer(initialState, action);
        expect(newState.hero.icon).toEqual(newIcon);
    });
});

describe('templateSlice reducer', () => {
    const initialState = {
        services: {
            services: [
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_one_xvd7d6.svg",
                    title: "Project Plan",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority.",
                },
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_two_dptua1.svg",
                    title: "Interior Work",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority.",
                },
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_three_v71ltg.svg",
                    title: "Realization",
                    description: "There are many variations of the passages of lorem Ipsum from available, majority.",
                },
            ],
        },
    };

    it('should add a new service', () => {
        const newService = {
            icon: "https://example.com/icon_four.svg",
            title: "New Service",
            description: "Lorem ipsum dolor sit amet.",
        };
        const action = templateActions1.addNewElement({ section: 'services', blockName: 'newService', value: newService });
        const newState = templateReducer(initialState, action);
        expect(newState.services.services.length).toEqual(initialState.services.services.length + 1);
        expect(newState.services.services.find(service => service.title === 'New Service')).toBeDefined();
    });

    it('should edit a service', () => {
        const editedService = {
            icon: "https://example.com/edited_icon.svg",
            title: "Edited Service",
            description: "Edited description.",
        };
        const action = templateActions1.updateTemplate({ section: 'services', variable: 'services', value: [editedService] });
        const newState = templateReducer(initialState, action);
        expect(newState.services.services.length).toEqual(1);
        expect(newState.services.services[0]).toEqual(editedService);
    });

    it('should delete a service', () => {
        const action = templateActions1.deleteElement({ section: 'services', blockName: 'Project Plan' });
        const newState = templateReducer(initialState, action);
        expect(newState.services.services.length).toEqual(initialState.services.services.length - 1);
        expect(newState.services.services.find(service => service.title === 'Project Plan')).not.toBeDefined();
    });

});

describe('templateSlice reducer', () => {
    // Mock initial state
    const initialState = {
        feature: {
            title: "We Create The Art Of Stylish Living Stylishly",
            description: "It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.",
            phone: "012345678",
            buttonText: "Get Free Estimate",
            icons: [
                "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
                "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
            ],
            imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813388/templates/template_one/Photo_sonnlx.jpg",
        },
    };

    it('should update feature title', () => {
        const newTitle = "New Feature Title";
        const action = templateActions1.updateTemplate({ section: 'feature', variable: 'title', value: newTitle });
        const newState = templateReducer(initialState, action);
        expect(newState.feature.title).toEqual(newTitle);
    });

    it('should update feature description', () => {
        const newDescription = "New feature description.";
        const action = templateActions1.updateTemplate({ section: 'feature', variable: 'description', value: newDescription });
        const newState = templateReducer(initialState, action);
        expect(newState.feature.description).toEqual(newDescription);
    });

    it('should update feature phone', () => {
        const newPhone = "987654321";
        const action = templateActions1.updateTemplate({ section: 'feature', variable: 'phone', value: newPhone });
        const newState = templateReducer(initialState, action);
        expect(newState.feature.phone).toEqual(newPhone);
    });

    it('should update feature button text', () => {
        const newButtonText = "Request Quote";
        const action = templateActions1.updateTemplate({ section: 'feature', variable: 'buttonText', value: newButtonText });
        const newState = templateReducer(initialState, action);
        expect(newState.feature.buttonText).toEqual(newButtonText);
    });

    it('should update feature icons', () => {
        const newIcons = [
            "https://example.com/icon1.svg",
            "https://example.com/icon2.svg",
        ];
        const action = templateActions1.updateTemplate({ section: 'feature', variable: 'icons', value: newIcons });
        const newState = templateReducer(initialState, action);
        expect(newState.feature.icons).toEqual(newIcons);
    });

    it('should update feature image URL', () => {
        const newImgUrl = "https://example.com/new-image.jpg";
        const action = templateActions1.updateTemplate({ section: 'feature', variable: 'imgUrl', value: newImgUrl });
        const newState = templateReducer(initialState, action);
        expect(newState.feature.imgUrl).toEqual(newImgUrl);
    });
});

describe('templateSlice reducer', () => {
    const initialState = {
        testimonials: {
            title: "What the People Thinks About Us",
            testimonials: [
                {
                    name: "Nattasha Mith",
                    location: "Sydney, USA",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808853/templates/template_one/Photo_1_zsyklb.jpg",
                    opinion: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
                },
                {
                    name: "Raymond Galario",
                    location: "Sydney, Australia",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808853/templates/template_one/Photo_1_zsyklb.jpg",
                    opinion: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
                },
                {
                    name: "Benny Roll ",
                    location: "Sydney, New York",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808853/templates/template_one/Photo_1_zsyklb.jpg",
                    opinion: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
                },
            ],
        },
    };

    it('should update testimonials title', () => {
        const newTitle = "New Testimonials Title";
        const action = templateActions1.updateTemplate({ section: 'testimonials', variable: 'title', value: newTitle });
        const newState = templateReducer(initialState, action);
        expect(newState.testimonials.title).toEqual(newTitle);
    });

    it('should add a new testimonial', () => {
        const newTestimonial = {
            name: "John Doe",
            location: "New York, USA",
            imgUrl: "https://example.com/john-doe.jpg",
            opinion: "This template is amazing!",
        };
        const action = templateActions1.addNewElement({ section: 'testimonials', element: newTestimonial });
        const newState = templateReducer(initialState, action);
        expect(newState.testimonials.testimonials).toContainEqual(newTestimonial);
    });

    it('should delete a testimonial', () => {
        const testimonialToDelete = initialState.testimonials.testimonials[0]; // Assuming first testimonial to delete
        const action = templateActions1.deleteElement({ section: 'testimonials', element: testimonialToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.testimonials.testimonials).not.toContainEqual(testimonialToDelete);
    });

    it('should edit a testimonial', () => {
        const editedTestimonial = {
            name: "Nattasha Mith",
            location: "Sydney, USA",
            imgUrl: "https://example.com/edited-img.jpg",
            opinion: "Updated testimonial opinion.",
        };
        const action = templateActions1.updateTemplate({ section: 'testimonials', index: 0, value: editedTestimonial });
        const newState = templateReducer(initialState, action);
        expect(newState.testimonials.testimonials[0]).toEqual(editedTestimonial);
    });
});


describe('templateSlice reducer', () => {
    const initialState = {
        logos: {
            companies: [
                { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/01_p78hjd.svg", company_URL: "https://x.com" },
                { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/02_mnw1ps.svg", company_URL: "https://x.com" },
                { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/03_fiplpx.svg", company_URL: "https://x.com" },
                { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808449/templates/template_one/04_pg8flc.svg", company_URL: "https://x.com" },
                { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808449/templates/template_one/05_prt3gi.svg", company_URL: "https://x.com" },
            ],
        },
    };

    it('should add a new company logo', () => {
        const newCompany = {
            imgUrl: "https://example.com/new-company-logo.svg",
            company_URL: "https://example.com",
        };
        const action = templateActions1.addNewElement({ section: 'logos', element: newCompany });
        const newState = templateReducer(initialState, action);
        expect(newState.logos.companies).toContainEqual(newCompany);
    });

    it('should delete a company logo', () => {
        const companyToDelete = initialState.logos.companies[0];
        const action = templateActions1.deleteElement({ section: 'logos', element: companyToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.logos.companies).not.toContainEqual(companyToDelete);
    });

    it('should edit a company logo', () => {
        const editedCompany = {
            imgUrl: "https://example.com/edited-logo.svg",
            company_URL: "https://edited-url.com",
        };
        const action = templateActions1.updateTemplate({ section: 'logos', index: 0, value: editedCompany });
        const newState = templateReducer(initialState, action);
        expect(newState.logos.companies[0]).toEqual(editedCompany);
    });
});


describe('templateSlice reducer', () => {
    const initialState = {
        projects: {
            title: "Follow Our Projects",
            description: "It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.",
            projects: [
                {
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808451/templates/template_one/Photo_2_w7jdep.jpg",
                    title: "Modern Kitchen",
                    description: "Decor / Architecture",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                },
                {
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808451/templates/template_one/Photo_3_wig9kc.jpg",
                    title: "Modern Kitchen",
                    description: "Decor / Architecture",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                },
                {
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808452/templates/template_one/Photo_iojikc.jpg",
                    title: "Modern Kitchen",
                    description: "Decor / Architecture",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                },
                {
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808450/templates/template_one/Photo_1_njncs1.jpg",
                    title: "Modern Kitchen",
                    description: "Decor / Architecture",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                },
            ],
        },
    };

    it('should add a new project', () => {
        const newProject = {
            imgUrl: "https://example.com/new-project-image.jpg",
            title: "New Project",
            description: "New project description",
            icon: "https://example.com/new-icon.svg",
        };
        const action = templateActions1.addNewElement({ section: 'projects', element: newProject });
        const newState = templateReducer(initialState, action);
        expect(newState.projects.projects).toContainEqual(newProject);
    });

    it('should delete a project', () => {
        const projectToDelete = initialState.projects.projects[0]; 
        const action = templateActions1.deleteElement({ section: 'projects', element: projectToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.projects.projects).not.toContainEqual(projectToDelete);
    });

    it('should edit a project', () => {
        const editedProject = {
            imgUrl: "https://example.com/edited-image.jpg",
            title: "Edited Project",
            description: "Edited project description",
            icon: "https://example.com/edited-icon.svg",
        };
        const action = templateActions1.updateTemplate({ section: 'projects', index: 0, value: editedProject });
        const newState = templateReducer(initialState, action);
        expect(newState.projects.projects[0]).toEqual(editedProject);
    });
});


describe('templateSlice reducer', () => {
    const initialState = {
        statistics: {
            statistics: [
                {
                    title: "Years Of Experience",
                    value: "12",
                },
                {
                    title: "Success Projects",
                    value: "85",
                },
                {
                    title: "Active Projects",
                    value: "15",
                },
                {
                    title: "Happy Customers",
                    value: "95",
                },
            ],
        },
    };

    it('should add a new statistic', () => {
        const newStatistic = {
            title: "New Statistic",
            value: "100",
        };
        const action = templateActions1.addNewElement({ section: 'statistics', element: newStatistic });
        const newState = templateReducer(initialState, action);
        expect(newState.statistics.statistics).toContainEqual(newStatistic);
    });

    it('should delete a statistic', () => {
        const statisticToDelete = initialState.statistics.statistics[0]; // Assuming first statistic to delete
        const action = templateActions1.deleteElement({ section: 'statistics', element: statisticToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.statistics.statistics).not.toContainEqual(statisticToDelete);
    });

    it('should edit a statistic', () => {
        const editedStatistic = {
            title: "Edited Statistic",
            value: "50",
        };
        const action = templateActions1.updateTemplate({ section: 'statistics', index: 0, value: editedStatistic });
        const newState = templateReducer(initialState, action);
        expect(newState.statistics.statistics[0]).toEqual(editedStatistic);
    });
});


describe('templateSlice reducer', () => {
    const initialState = {
        items: {
            title: "Articles & News",
            description:
                "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
            items: [
                {
                    title: "Let’s Get Solution For Building Construction Work",
                    description: "26 December,2022 ",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718041/templates/template_one/article1.f88f54e6a4cdbf340b36_l3ujjw.png",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                    caption: "Kitchan Design",
                },
                {
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    description: "22 December,2022 ",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article2.43be768543cb8cfeaf07_atvwjd.png",
                    caption: "Living Design",
                },
                {
                    title: "Best For Any Office & Business Interior Solution",
                    description: "25 December,2022 ",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article3.f759fde0c85f3fb92b22_c2tqkv.png",
                    caption: "Interior Design",
                },
            ],
        },
    };

    it('should add a new item', () => {
        const newItem = {
            title: "New Article",
            description: "01 January,2023 ",
            imgUrl: "https://example.com/new_article.png",
            icon: "https://example.com/new_icon.svg",
            caption: "New Caption",
        };
        const action = templateActions1.addNewElement({ section: 'items', element: newItem });
        const newState = templateReducer(initialState, action);
        expect(newState.items.items).toContainEqual(newItem);
    });

    it('should delete an item', () => {
        const itemToDelete = initialState.items.items[0]; // Assuming first item to delete
        const action = templateActions1.deleteElement({ section: 'items', element: itemToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.items.items).not.toContainEqual(itemToDelete);
    });

    it('should edit an item', () => {
        const editedItem = {
            title: "Edited Article",
            description: "01 January,2023 ",
            imgUrl: "https://example.com/edited_article.png",
            icon: "https://example.com/edited_icon.svg",
            caption: "Edited Caption",
        };
        const action = templateActions1.updateTemplate({ section: 'items', index: 0, value: editedItem });
        const newState = templateReducer(initialState, action);
        expect(newState.items.items[0]).toEqual(editedItem);
    });
});


describe('templateSlice reducer', () => {
    const initialState = {
        team: {
            title: "Our Team Members",
            members: [
                {
                    id: "1",
                    name: "Nattasha",
                    location: "Design, Australia",
                    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808855/templates/template_one/Photo_fz8cuc.jpg",
                    mediaIcons: [
                        {
                            icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/facebook_td263x.svg",
                            url: "https://facebook.com",
                        },
                        {
                            icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/x_yp3y5n.svg",
                            url: "https://x.com",
                        },
                        {
                            icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/linkedin_itbvp5.svg",
                            url: "https://linkedin.com",
                        },
                        {
                            icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/instagram_dlrab9.svg",
                            url: "https://instagram.com",
                        },
                    ],
                    email: "julie@email.com",
                },
            ],
        },
    };

    it('should add a new team member', () => {
        const newMember = {
            id: "4",
            name: "New Member",
            location: "Design, Australia",
            imgUrl: "https://example.com/new_member_photo.jpg",
            mediaIcons: [
                {
                    icon: "https://example.com/facebook_icon.svg",
                    url: "https://facebook.com",
                },
                {
                    icon: "https://example.com/twitter_icon.svg",
                    url: "https://twitter.com",
                },
            ],
            email: "new@email.com",
        };
        const action = templateActions1.addNewElement({ section: 'team', element: newMember });
        const newState = templateReducer(initialState, action);
        expect(newState.team.members).toContainEqual(newMember);
    });

    it('should delete a team member', () => {
        const memberToDelete = initialState.team.members[0]; // Assuming first member to delete
        const action = templateActions1.deleteElement({ section: 'team', element: memberToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.team.members).not.toContainEqual(memberToDelete);
    });

    it('should edit a team member', () => {
        const editedMember = {
            id: "1",
            name: "Edited Member",
            location: "Design, Australia",
            imgUrl: "https://example.com/edited_member_photo.jpg",
            mediaIcons: [
                {
                    icon: "https://example.com/edited_facebook_icon.svg",
                    url: "https://facebook.com",
                },
                {
                    icon: "https://example.com/edited_twitter_icon.svg",
                    url: "https://twitter.com",
                },
            ],
            email: "edited@email.com",
        };
        const action = templateActions1.updateTemplate({ section: 'team', index: 0, value: editedMember });
        const newState = templateReducer(initialState, action);
        expect(newState.team.members[0]).toEqual(editedMember);
    });
});









describe('templateSlice reducer', () => {
    const initialState = {
        pricing: {
            title: "Pricing & Plan",
            description: "Home / Priceing",
            plans: [
                {
                    plan: "Design advices",
                    price: "29",
                    timeUnit: "month",
                    moneyUnit: "$",
                    features: ["General living space advices", "Renovation advices", "Interior design advices", "Furniture reorganization", "Up to 5 hours meetings"],
                    buttonText: "Get Started",
                    icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709586475/Vector_urtrep.svg",
                },
                {
                    plan: "Design advices",
                    price: "39",
                    timeUnit: "month",
                    moneyUnit: "$",
                    features: ["Complete home redesign", "Interior and exterior works", "Modular interior planning", "Kitchen design", "Garages organization"],
                    buttonText: "Get Started",
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
                },
                {
                    plan: "Furniture design",
                    price: "59",
                    timeUnit: "month",
                    moneyUnit: "$",
                    features: ["Furniture for living room", "Furniture refurbishment", "Sofas and armchairs", "Tables and chairs", "Kitchens"],
                    buttonText: "Get Started",
                    icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709586475/Vector_urtrep.svg",
                },
            ],
        },
    };

    it('should add a new pricing plan', () => {
        const newPlan = {
            plan: "New Plan",
            price: "99",
            timeUnit: "month",
            moneyUnit: "$",
            features: ["Feature 1", "Feature 2", "Feature 3"],
            buttonText: "Get Started",
            icon: "https://example.com/new_icon.svg",
        };
        const action = templateActions1.addNewElement({ section: 'pricing', element: newPlan });
        const newState = templateReducer(initialState, action);
        expect(newState.pricing.plans).toContainEqual(newPlan);
    });

    it('should delete a pricing plan', () => {
        const planToDelete = initialState.pricing.plans[0]; // Assuming first plan to delete
        const action = templateActions1.deleteElement({ section: 'pricing', element: planToDelete });
        const newState = templateReducer(initialState, action);
        expect(newState.pricing.plans).not.toContainEqual(planToDelete);
    });

    it('should edit a pricing plan', () => {
        const editedPlan = {
            plan: "Edited Plan",
            price: "79",
            timeUnit: "month",
            moneyUnit: "$",
            features: ["Edited Feature 1", "Edited Feature 2", "Edited Feature 3"],
            buttonText: "Get Started",
            icon: "https://example.com/edited_icon.svg",
        };
        const action = templateActions1.updateTemplate({ section: 'pricing', index: 0, value: editedPlan });
        const newState = templateReducer(initialState, action);
        expect(newState.pricing.plans[0]).toEqual(editedPlan);
    });
});




describe('templateSlice reducer', () => {
    const initialState = {
        cta: {
            title: "Wanna join the interno?",
            description: "It is a long established fact  will be distracted.",
            buttonText: "Contact With Us",
            icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709586475/Vector_urtrep.svg",
        },
    };

    it('should update CTA section', () => {
        const updatedCTA = {
            title: "Join Us Now!",
            description: "Get in touch with us today.",
            buttonText: "Join Now",
            icon: "https://example.com/new_icon.svg",
        };
        const action = templateActions1.updateTemplate({ section: 'cta', value: updatedCTA });
        const newState = templateReducer(initialState, action);
        expect(newState.cta).toEqual(updatedCTA);
    });
});



describe('templateSlice reducer', () => {
    const initialState = {
        footer: {
            imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701811960/templates/template_one/Logo_mj7rvw.png",
            description: "It is a long established fact that a reader will be distracted lookings.",
            medias: [
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/facebook_td263x.svg",
                    url: "https://facebook.com",
                },
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/x_yp3y5n.svg",
                    url: "https://x.com",
                },
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/linkedin_itbvp5.svg",
                    url: "https://linkedin.com",
                },
                {
                    icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/instagram_dlrab9.svg",
                    url: "https://instagram.com",
                },
            ],
        },
    };

    it('should update footer section', () => {
        const updatedFooter = {
            imgUrl: "https://example.com/new_logo.png",
            description: "Stay connected with us on social media.",
            medias: [
                {
                    icon: "https://example.com/new_facebook_icon.svg",
                    url: "https://facebook.com/new",
                },
            ],
        };
        const action = templateActions1.updateTemplate({ section: 'footer', value: updatedFooter });
        const newState = templateReducer(initialState, action);
        expect(newState.footer).toEqual(updatedFooter);
    });
});



describe('templateSlice reducer', () => {
    // Mock initial state
    const initialState = {
        footerSections: [
            {
                title: "Services",
                links: [
                    { title: "Kitchan", url: "#" },
                    { title: "Living Area", url: "#" },
                    { title: "Bathroom", url: "#" },
                    { title: "Dinning Hall", url: "#" },
                    { title: "Bedroom", url: "#" },
                ],
            },
            {
                title: "Sections",
                links: [
                    { title: "About Us", url: "#" },
                    { title: "Projects", url: "#" },
                    { title: "Our Team", url: "#" },
                    { title: "Contact Us", url: "#" },
                    { title: "Services", url: "#" },
                ],
            },
        ],
        // other initial state properties...
    };

    it('should update footerSections', () => {
        const updatedFooterSections = [
            {
                title: "Services",
                links: [
                    { title: "Kitchen", url: "/kitchen" },
                    { title: "Living Area", url: "/living-area" },
                    { title: "Bathroom", url: "/bathroom" },
                    { title: "Dining Hall", url: "/dining-hall" },
                    { title: "Bedroom", url: "/bedroom" },
                ],
            },
            {
                title: "Sections",
                links: [
                    { title: "About Us", url: "/about" },
                    { title: "Projects", url: "/projects" },
                    { title: "Our Team", url: "/team" },
                    { title: "Contact Us", url: "/contact" },
                    { title: "Services", url: "/services" },
                ],
            },
        ];
        const action = templateActions1.updateTemplate({ section: 'footerSections', value: updatedFooterSections });
        const newState = templateReducer(initialState, action);
        expect(newState.footerSections).toEqual(updatedFooterSections);
    });
});


describe('templateSlice reducer', () => {
    const initialState = {
        contacts: [
            {
                value: "55 East Birchwood Ave. Brooklyn, New York 11201",
            },
            {
                value: "contact@interno.com",
            },
            {
                value: "(123) 125-858",
            },
        ],
        // other initial state properties...
    };

    it('should update contacts', () => {
        const updatedContacts = [
            {
                value: "123 Main St. Anytown, USA",
            },
            {
                value: "info@interno.com",
            },
            {
                value: "(555) 555-5555",
            },
        ];
        const action = templateActions1.updateTemplate({ section: 'contacts', value: updatedContacts });
        const newState = templateReducer(initialState, action);
        expect(newState.contacts).toEqual(updatedContacts);
    });
});
