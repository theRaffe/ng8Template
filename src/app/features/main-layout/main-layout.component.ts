import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    public isToggleMenu = false;
    public menuItems = ['Home', 'About', 'Projects', 'other Projects', 'Logout'];

    constructor() { }

    ngOnInit() {
    }

    public onMenuClick(): void {
        this.isToggleMenu = !this.isToggleMenu;
        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach(
            (navLink, index) => {
                const animationStr = `animation: navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                const clearAnimation = `animation:'' `;
                navLink.setAttribute('style', this.isToggleMenu ? animationStr : clearAnimation);

            }
        )
    }
}
