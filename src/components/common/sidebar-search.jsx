import React, { Component } from 'react';

class SidebarSearch extends Component
{
    render() {
        return (
            <div className="sidebar_search">
                <form>
                <input type="text" name="" className="search_input" placeholder='search...'/>
                <input type="image" className="search_submit"
                src="https://jfr.zapple.co/images/search.png" alt='search'/>
                </form>
            </div>
        )
    }
}
export default SidebarSearch;