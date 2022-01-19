export class TablePagination {
    currentPage: number = 1
    totalData: number = 0;
    itemsPerPage: number = 10;
    rowOfNumberShown: number = 5
    viewPagination: {
        indexView: number[],
        firstPage: number,
        lastPage: number,
        disablePrev?: boolean,
        disableNext?: boolean,
    } = {
            indexView: [],
            firstPage: 1,
            lastPage: 1,
            disableNext: false,
            disablePrev: false,
        }

    initPagination() {
        this.setViewPaginationIndex(this.totalData);
    }

    private setViewPaginationIndex(totalData: any) {
        this.viewPagination.firstPage = 1;
        this.viewPagination.lastPage = this.getLastPagePagination(totalData);
        this.viewPagination.disableNext = this.isNextPageDisabled();
        this.viewPagination.disablePrev = this.isPrevPageDisabled();
        this.viewPagination.indexView = this.getIndexViewPagination();
    }

    private getLastPagePagination(totalData: any): number {
        return Math.ceil(totalData / this.itemsPerPage);
    }

    private isPrevPageDisabled(): boolean {
        return this.currentPage == this.viewPagination.firstPage || this.totalData <= 0;
    }

    private isNextPageDisabled(): boolean {
        return this.currentPage == this.viewPagination.lastPage || this.totalData <= 0;
    }

    private getIndexViewPagination(): any[] {
        let indexView: number[] = [];
        let headPageNumber: number;
        let tailPageNumber: number;

        if (this.currentPage == this.viewPagination.firstPage) {
            headPageNumber = this.viewPagination.firstPage;
            tailPageNumber = this.viewPagination.firstPage + Math.floor(this.rowOfNumberShown / 2);
        } else if (this.currentPage == this.viewPagination.lastPage) {
            headPageNumber = this.viewPagination.lastPage - Math.floor(this.rowOfNumberShown / 2);
            tailPageNumber = this.viewPagination.lastPage;
        } else {
            headPageNumber = this.currentPage - Math.floor(this.rowOfNumberShown / 2);
            tailPageNumber = this.currentPage + Math.floor(this.rowOfNumberShown / 2);
        }

        for (let i = headPageNumber; i <= tailPageNumber; i++) {
            if ((i >= this.viewPagination.firstPage) && (i <= this.viewPagination.lastPage)) {
                indexView.push(i);
            }
        }

        return indexView;
    }
}